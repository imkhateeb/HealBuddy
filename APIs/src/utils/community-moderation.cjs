// import OpenAI from "openai";
const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI({
  apiKey: "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",
});

async function checkModeration(textContent) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Perform content moderation and determine whether this text:  ${textContent} violates community guidelines by assessing for offensive language, hate speech, nudity, NSFW content. If any of these contains return a True or False response.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const response = completion.choices[0].message.content;
  //   console.log(response); -> for debugging

  return response;
}

// checkModeration("love this pic"); -> for debugging

module.exports = checkModeration;
