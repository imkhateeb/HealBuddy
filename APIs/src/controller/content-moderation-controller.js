const { CheckModerationServices } = require("../services/index");

const contentModeration = new CheckModerationServices();

const check = async (req, res) => {
  try {
    const response = await contentModeration.checkContent(req.body.textContent);
    return res.status(200).json({
      data: response,
      message: "Successfully check text moderation",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Failed to check text Moderation",
      success: false,
      err: { error },
    });
  }
};

module.exports = {
  check,
};
