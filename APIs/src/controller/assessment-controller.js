const { MentalHealthAssessmentServices } = require("../services/index");

const mentalHealthAssessment = new MentalHealthAssessmentServices();

const getResponse = async (req, res) => {
  try {
    const response = await mentalHealthAssessment.gptResponse(
      req.body.textContent
    );
    return res.status(201).json({
      data: response,
      message: "Successfully fetched data",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "There is error in fetching response",
      success: false,
      err: { error },
    });
  }
};

module.exports = getResponse;
