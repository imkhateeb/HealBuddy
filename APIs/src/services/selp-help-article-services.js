const getArticles = require("../utils/self-help-article-gpt.cjs");

class GetSelfArticles {
  async gptResponse() {
    try {
      const response = await getArticles();
      return response;
    } catch (error) {
      console.log("There is error in Services Layer");
      throw { error };
    }
  }
}

module.exports = GetSelfArticles;
