// import OpenAI from "openai";
const OpenAI=require('openai');
const openai = new OpenAI({ apiKey: "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" });

 async function getResponse(textContent) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: `These are the ten questions-answers which we ask to take mental health assessment by the user, now analyse this question-answers completely and give a complete report about the mental health of individual. Act like a mental health expert.  ` + textContent }],
    model: "gpt-3.5-turbo",
  });


  
  const response = completion.choices[0].message.content;
  console.log(response);
  

  return response;
}

module.exports=getResponse;



