// import OpenAI from "openai";
const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_TOKEN });

async function getResponse(textContent) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          `These are the ten questions-answers which we ask to take mental health assessment by the user, now analyse this question-answers completely and give response in the JSON format which include the parameters about the level of stress, anxiety, depression,happiness on the scale of ten. Response should be on only json strictly.` +
          textContent,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const response = completion.choices[0].message.content;
  // console.log(response); -> for debugging

  return response;
}

module.exports = getResponse;
