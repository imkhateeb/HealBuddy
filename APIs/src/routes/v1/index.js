const express = require("express");
const router = express.Router();

// const AssessmentController = require("../../controller/assessment-controller");
// const SelfHelpController = require("../../controller/self-help-articles-controller");
const {
  AssessmentController,
  SelfHelpController,
  ContentModerationController,
} = require("../../controller/index");

//Mental-Health-Assessment-Routes

router.post("/assessment", AssessmentController.getResponse);
router.get("/self-help", SelfHelpController.get);
router.get("/contentmoderation", ContentModerationController.check);

module.exports = router;
