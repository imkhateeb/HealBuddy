const checkModeration = require("../utils/community-moderation.cjs");

class CheckModerationServices {
  async checkContent(data) {
    try {
      const response = await checkModeration(data);
      // const jsonResponse = JSON.parse(response);
      return response;
    } catch (error) {
      console.log("There is error in service layer");
      throw { error };
    }
  }
}

module.exports = CheckModerationServices;
