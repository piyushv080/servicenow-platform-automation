#!/usr/bin/env python3
"""Archive one ServiceNow update set and all of its Customer Update payloads."""

import base64
from datetime import datetime, timezone
import json
import os
import re
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


def required_env(name: str) -> str:
    value = os.environ.get(name, "").strip()
    if not value:
        raise RuntimeError(f"Required environment variable {name} is not set")
    return value


def api_get(instance: str, username: str, password: str, table: str, params: dict) -> dict:
    base = f"https://{instance}.service-now.com/api/now/table/{table}"
    url = f"{base}?{urlencode(params)}"
    token = base64.b64encode(f"{username}:{password}".encode()).decode()
    request = Request(
        url,
        headers={
            "Accept": "application/json",
            "Authorization": f"Basic {token}",
        },
    )
    try:
        with urlopen(request, timeout=60) as response:
            return json.load(response)
    except HTTPError as exc:
        # Do not print the request URL or credentials; ServiceNow's error body is
        # useful for diagnosing ACL/table access failures.
        body = exc.read().decode("utf-8", errors="replace")[:1000]
        raise RuntimeError(f"ServiceNow returned HTTP {exc.code} for {table}: {body}") from exc
    except URLError as exc:
        raise RuntimeError(f"Could not connect to ServiceNow for table {table}: {exc.reason}") from exc


def slug(value: str) -> str:
    result = re.sub(r"[^a-zA-Z0-9._-]+", "-", value.strip()).strip("-._")
    return result[:80] or "update-set"


def main() -> None:
    instance = required_env("SN_INSTANCE")
    username = required_env("SN_USERNAME")
    password = required_env("SN_PASSWORD")
    update_set_name = required_env("UPDATE_SET_NAME")

    # Require an instance subdomain, not a URL, to avoid constructing an
    # unexpected host from a secret value.
    if not re.fullmatch(r"[A-Za-z0-9-]+", instance):
        raise RuntimeError("SN_INSTANCE must be the instance subdomain only (for example, dev12345)")

    matches = api_get(
        instance,
        username,
        password,
        "sys_update_set",
        {
            "sysparm_query": f"name={update_set_name}",
            "sysparm_fields": "sys_id,name,description,state,application,sys_updated_on",
            "sysparm_display_value": "false",
            "sysparm_limit": "2",
        },
    ).get("result", [])

    if len(matches) != 1:
        raise RuntimeError(
            f"Expected exactly one update set named {update_set_name!r}; found {len(matches)}. "
            "Use a unique exact name and ensure the account can read sys_update_set."
        )

    update_set = matches[0]
    update_set_id = update_set.get("sys_id", "")
    if not re.fullmatch(r"[0-9a-fA-F]{32}", update_set_id):
        raise RuntimeError("ServiceNow returned an invalid update set sys_id")

    output_dir = Path("update-sets") / slug(update_set_name)
    output_dir.mkdir(parents=True, exist_ok=True)
    (output_dir / "update-set.json").write_text(
        json.dumps({"result": update_set}, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    limit = 100
    offset = 0
    page = 1
    total = 0
    while True:
        records = api_get(
            instance,
            username,
            password,
            "sys_update_xml",
            {
                "sysparm_query": f"update_set={update_set_id}",
                "sysparm_fields": (
                    "sys_id,update_set,name,type,target_name,action,payload,sys_created_on,sys_updated_on"
                ),
                "sysparm_display_value": "false",
                "sysparm_limit": str(limit),
                "sysparm_offset": str(offset),
                "sysparm_orderby": "sys_id",
            },
        ).get("result", [])

        if not records:
            break

        page_path = output_dir / f"customer-updates-{page:04d}.json"
        page_path.write_text(
            json.dumps({"result": records}, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        total += len(records)
        print(f"Archived customer update page {page}: {len(records)} records")
        if len(records) < limit:
            break
        offset += limit
        page += 1

    if total == 0:
        raise RuntimeError(
            f"Update set {update_set_name!r} has no readable Customer Updates in sys_update_xml. "
            "Check the Customer Updates related list and API table permissions."
        )

    manifest = {
        "update_set_name": update_set_name,
        "update_set_sys_id": update_set_id,
        "customer_update_count": total,
        "payload_field": "sys_update_xml.payload",
        "pages": page,
        "captured_at_utc": datetime.now(timezone.utc).isoformat(),
    }
    (output_dir / "manifest.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Archived {total} Customer Updates for update set {update_set_name!r} ({update_set_id})")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"Update set export failed: {exc}", file=sys.stderr)
        sys.exit(1)
