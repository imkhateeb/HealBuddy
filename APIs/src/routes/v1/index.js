const express = require('express');
const router = express.Router();

const AssessmentController = require('../../controller/assessment-controller');

//Mental-Health-Assessment-Routes

router.post("/assessment", AssessmentController);

module.exports = router;
