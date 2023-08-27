const express = require("express");
const router = express.Router();

const AssessmentController = require("../../controller/assessment-controller");
const SelfHelpController = require("../../controller/self-help-articles-controller");

//Mental-Health-Assessment-Routes

router.post("/assessment", AssessmentController);
router.get("/self-help", SelfHelpController.get);

module.exports = router;
