// import OpenAI from "openai";
const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_TOKEN });

async function getArticles() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          "Compose a compelling self-help article with a strong focus on offering motivation and empathetic support for individuals navigating the complexities of mental health challenges.",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const response = completion.choices[0].message.content;
  console.log(response);

  return response;
}
module.exports = getArticles;
