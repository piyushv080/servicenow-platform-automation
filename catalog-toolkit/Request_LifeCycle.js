(function executeEndToEndTest() {
  var CATALOG_ITEM_ID = "a676a847b4e84741afc14fe6f675bfbd";
  var APPROVER_USER_ID = "6816f79cc0a8016401c5a33be04be441";

  var WAIT_ATTEMPTS = 12;
  var WAIT_INTERVAL_MS = 5000;

  var report = {
    request: "",
    ritm: "",
    approval: "",
    fulfillmentTask: "",
    assignmentGroup: "",
    lifecycle: "",
    passed: [],
    failed: [],
  };

  function log(message) {
    gs.info("[CATALOG E2E] " + message);
  }

  function check(condition, success, failure) {
    if (condition) {
      report.passed.push(success);
      log("PASS: " + success);
    } else {
      report.failed.push(failure);
      log("FAIL: " + failure);
    }
  }

  function pause() {
    // Background Scripts are synchronous; wait briefly for async Flow processing.
    gs.sleep(WAIT_INTERVAL_MS);
  }

  function getRitm(ritmId) {
    var record = new GlideRecord("sc_req_item");
    return record.get(ritmId) ? record : null;
  }

  function getApproval(ritmId) {
    var record = new GlideRecord("sysapproval_approver");
    record.addQuery("sysapproval", ritmId);
    record.addQuery("approver", APPROVER_USER_ID);
    record.orderByDesc("sys_created_on");
    record.setLimit(1);
    record.query();

    return record.next() ? record : null;
  }

  function getTask(ritmId) {
    var record = new GlideRecord("sc_task");
    record.addQuery("request_item", ritmId);
    record.orderByDesc("sys_created_on");
    record.setLimit(1);
    record.query();

    return record.next() ? record : null;
  }

  log("========== START END-TO-END TEST ==========");

  // 1. Create a fresh catalog request.
  var cart = new sn_sc.CartJS();

  var cartResult = cart.addToCart({
    sysparm_id: CATALOG_ITEM_ID,
    sysparm_quantity: "1",
    variables: {
      requester_name: "Piyush",
      contact_number: "9999999999",
      request_type: "access",
      environment: "development",
      business_justification:
        "Access is required for development and infrastructure automation activities.",
      required_date: gs.daysAgo(-7).toString(),
      additional_information: "Automated end-to-end Catalog Toolkit test.",
    },
  });

  log("Cart: " + JSON.stringify(cartResult));

  var checkout = cart.checkoutCart();

  log("Checkout: " + JSON.stringify(checkout));

  var requestId = checkout.request_id;

  check(!!requestId, "Request checkout succeeded", "Request checkout failed");

  if (!requestId) return;

  var request = new GlideRecord("sc_request");

  if (!request.get(requestId)) {
    log("REQ record not found.");
    return;
  }

  report.request = request.getValue("number");
  log("REQ: " + report.request);

  // 2. Find the generated RITM.
  var ritm = new GlideRecord("sc_req_item");
  ritm.addQuery("request", requestId);
  ritm.query();

  if (!ritm.next()) {
    log("RITM not created.");
    return;
  }

  var ritmId = ritm.getUniqueValue();
  report.ritm = ritm.getValue("number");

  check(true, "RITM created: " + report.ritm, "");

  log("RITM sys_id: " + ritmId);

  // 3. Wait for the approval record.
  var approval = null;

  for (var i = 0; i < WAIT_ATTEMPTS; i++) {
    approval = getApproval(ritmId);

    if (approval) break;

    log("Waiting for approval record: " + (i + 1));
    pause();
  }

  check(
    !!approval,
    "Approval record created",
    "Approval record was not created",
  );

  if (!approval) {
    log("Stopping: no approval record exists.");
    return;
  }

  report.approval = approval.getUniqueValue();

  log("Approver: " + approval.getDisplayValue("approver"));
  log("Approval state: " + approval.getValue("state"));

  // 4. Approve the request.
  if (approval.getValue("state") === "requested") {
    approval.setValue("state", "approved");
    approval.update();
    log("Approval response submitted.");
  }

  // 5. Wait for approval processing and fulfillment task.
  var task = null;

  for (var j = 0; j < WAIT_ATTEMPTS; j++) {
    task = getTask(ritmId);

    if (task) break;

    log("Waiting for fulfillment task: " + (j + 1));
    pause();
  }

  approval = getApproval(ritmId);
  task = getTask(ritmId);
  ritm = getRitm(ritmId);

  check(!!task, "Fulfillment task created", "Fulfillment task was not created");

  if (approval) {
    check(
      approval.getValue("state") === "approved",
      "Approval is approved",
      "Approval state is " + approval.getValue("state"),
    );
  }

  // 6. Verify assignment.
  if (task) {
    report.fulfillmentTask = task.getValue("number");
    report.assignmentGroup = task.getDisplayValue("assignment_group");

    check(
      task.getValue("assignment_group") === "679434f053231300e321ddeeff7b12d8",
      "Task assigned to Help Desk",
      "Unexpected assignment group: " + report.assignmentGroup,
    );

    log("SCTASK: " + report.fulfillmentTask);
    log("Task state: " + task.getValue("state"));
    log("Assignment: " + report.assignmentGroup);
  }

  // 7. Verify RITM lifecycle.
  if (ritm) {
    var state = ritm.getValue("state");
    var stage = ritm.getValue("stage");
    var approvalState = ritm.getValue("approval");

    report.lifecycle =
      "state=" + state + ", approval=" + approvalState + ", stage=" + stage;

    check(
      approvalState === "approved",
      "RITM approval is approved",
      "RITM approval is " + approvalState,
    );

    check(
      state === "2",
      "RITM state is Work in Progress",
      "RITM state is " + state,
    );

    check(
      stage === "fulfillment",
      "RITM stage is fulfillment",
      "RITM stage is " + stage,
    );
  }

  // 8. Print final report.
  log("========== FINAL REPORT ==========");
  log("REQ: " + report.request);
  log("RITM: " + report.ritm);
  log("SCTASK: " + report.fulfillmentTask);
  log("Assignment: " + report.assignmentGroup);
  log("Lifecycle: " + report.lifecycle);
  log("Passed: " + report.passed.length);
  log("Failed: " + report.failed.length);

  for (var p = 0; p < report.passed.length; p++) {
    log("PASS " + (p + 1) + ": " + report.passed[p]);
  }

  for (var f = 0; f < report.failed.length; f++) {
    log("FAIL " + (f + 1) + ": " + report.failed[f]);
  }

  log("========== TEST FINISHED ==========");
})();
