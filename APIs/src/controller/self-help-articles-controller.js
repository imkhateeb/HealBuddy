const { GetSelfArticles } = require("../services/index");

const getSelfArticles = new GetSelfArticles();

const get = async (req, res) => {
  try {
    const response = await getSelfArticles.gptResponse();

    return res.status(200).json({
      data: response,
      message: "Successfully fetched the data",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "failed to fetched the data",
      success: false,
      err: { error },
    });
  }
};

module.exports = {
  get,
};
