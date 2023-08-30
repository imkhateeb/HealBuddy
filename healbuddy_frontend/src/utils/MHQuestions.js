export const MentalHealthQuestions = (data) => {
   if (data === 1) {
      const mentalHealthQuestion1 = [
         {
            Question: "How often do you feel a sense of purpose in your activities?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Almost Always", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
            ]
         },
         {
            Question: "How well do you handle criticism?",
            PossibleAnswers: ["Very Well", "Moderately Well", "Not Well", "Not at All"],
            AnswerDetails: [
               { Answer: "Very Well", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Moderately Well", stressMagnitude: 0.3, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Not Well", stressMagnitude: 0.6, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 3 },
               { Answer: "Not at All", stressMagnitude: 0.9, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 2 }
            ]
         },
         {
            Question: "How often do you find joy in small things?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Almost Always", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
            ]
         },
         {
            Question: "How often do you feel agitated or restless?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How well do you manage your time?",
            PossibleAnswers: ["Very Well", "Moderately Well", "Not Well", "Not at All"],
            AnswerDetails: [
               { Answer: "Very Well", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Moderately Well", stressMagnitude: 0.3, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Not Well", stressMagnitude: 0.6, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 3 },
               { Answer: "Not at All", stressMagnitude: 0.9, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 2 }
            ]
         },
         {
            Question: "How often do you experience physical symptoms of anxiety (e.g., rapid heartbeat)?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How comfortable are you with seeking help from others?",
            PossibleAnswers: ["Very Comfortable", "Moderately Comfortable", "Neutral", "Slightly Uncomfortable", "Very Uncomfortable"],
            AnswerDetails: [
               { Answer: "Very Comfortable", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Moderately Comfortable", stressMagnitude: 0.3, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Neutral", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Slightly Uncomfortable", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 },
               { Answer: "Very Uncomfortable", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 2 }
            ]
         },
         {
            Question: "How often do you engage in self-care activities?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Almost Always", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
            ]
         },
         {
            Question: "How often do you feel a sense of connection to nature?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Almost Always", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
            ]
         },
         // Continue adding more questions and their answer details here
      ];

      return mentalHealthQuestion1;
   }
   if (data === 2) {
      const mentalHealthQuestionsSet2 = [
         {
            Question: "How often do you compare yourself to others?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you engage in relaxation techniques (e.g., deep breathing, mindfulness)?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Almost Always", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
            ]
         },
         {
            Question: "How often do you feel overwhelmed by your responsibilities?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How satisfied are you with your personal relationships?",
            PossibleAnswers: ["Very Satisfied", "Moderately Satisfied", "Neutral", "Slightly Dissatisfied", "Very Dissatisfied"],
            AnswerDetails: [
               { Answer: "Very Satisfied", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Moderately Satisfied", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Neutral", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Slightly Dissatisfied", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Very Dissatisfied", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you feel a sense of loneliness?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you experience difficulty concentrating?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 2 }
            ]
         },
         {
            Question: "How often do you engage in creative activities?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Almost Always", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
            ]
         },
         {
            Question: "How often do you feel a sense of gratitude?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you set aside time for hobbies you enjoy?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Almost Always", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
            ]
         },
      ];
      return mentalHealthQuestionsSet2;
   }
   if (data === 3) {
      const mentalHealthQuestionsSet3 = [
         {
            Question: "How well do you manage stressors in your life?",
            PossibleAnswers: ["Very Well", "Moderately Well", "Neutral", "Slightly Poorly", "Very Poorly"],
            AnswerDetails: [
               { Answer: "Very Well", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Moderately Well", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Neutral", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Slightly Poorly", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 },
               { Answer: "Very Poorly", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you experience racing thoughts?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How satisfied are you with your work or academic performance?",
            PossibleAnswers: ["Very Satisfied", "Moderately Satisfied", "Neutral", "Slightly Dissatisfied", "Very Dissatisfied"],
            AnswerDetails: [
               { Answer: "Very Satisfied", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Moderately Satisfied", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Neutral", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Slightly Dissatisfied", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 },
               { Answer: "Very Dissatisfied", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you experience feelings of guilt?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Almost Always", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 }
            ]
         },
         {
            Question: "How often do you find yourself ruminating over negative thoughts?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Sometimes", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Almost Always", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you experience physical symptoms of anxiety (e.g., racing heart, sweating)?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.7, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you feel a lack of motivation?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you have difficulty falling asleep or staying asleep?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
               { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
            ]
         },
         {
            Question: "How often do you feel a sense of hopelessness about the future?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.7, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
               { Answer: "Almost Always", stressMagnitude: 0.9, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 }
            ]
         },
         {
            Question: "How often do you experience feelings of worthlessness?",
            PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
            AnswerDetails: [
               { Answer: "Rarely", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
               { Answer: "Sometimes", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
               { Answer: "Often", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
               { Answer: "Almost Always", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 }
            ]
         },
      ];
      return mentalHealthQuestionsSet3;
   }
   if ( data === 4 ){
      const mentalHealthQuestionsSet4 = [
         {
             Question: "How often do you engage in physical exercise?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Almost Always", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
             ]
         },
         {
             Question: "How well do you handle unexpected changes in your routine?",
             PossibleAnswers: ["Very Well", "Moderately Well", "Neutral", "Slightly Poorly", "Very Poorly"],
             AnswerDetails: [
                 { Answer: "Very Well", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Moderately Well", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
                 { Answer: "Neutral", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
                 { Answer: "Slightly Poorly", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 },
                 { Answer: "Very Poorly", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you feel a lack of purpose in your life?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Almost Always", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 }
             ]
         },
         {
             Question: "How often do you practice self-compassion?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
                 { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
                 { Answer: "Often", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 },
                 { Answer: "Almost Always", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you experience mood swings?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you practice mindfulness or meditation?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Almost Always", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 }
             ]
         },
         {
             Question: "How often do you feel a sense of accomplishment?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Almost Always", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 }
             ]
         },
         {
             Question: "How often do you feel a sense of purpose in your life?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Sometimes", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
                 { Answer: "Almost Always", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 }
             ]
         },
         {
             Question: "How often do you experience social anxiety in social situations?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.3, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 4 },
                 { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 3 },
                 { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 2 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 1, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you find joy in small everyday moments?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
             ]
         },
         // Continue adding more questions and their answer details here
     ];
      return mentalHealthQuestionsSet4;
   }
   if ( data === 5 ){
      const mentalHealthQuestionsSet5 = [
         {
             Question: "How often do you feel a sense of self-doubt?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
                 { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you experience perfectionistic tendencies?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Sometimes", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 3 },
                 { Answer: "Often", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 2 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 1, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you experience feelings of envy or jealousy?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.7, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 2 }
             ]
         },
         {
             Question: "How often do you feel overwhelmed by negative news or information?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.5, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
                 { Answer: "Sometimes", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 },
                 { Answer: "Often", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 1 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 1, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you feel a sense of belonging in your community or social circles?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.3, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
                 { Answer: "Sometimes", stressMagnitude: 0.6, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 3 },
                 { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.7, mentalStabilityMagnitude: 2 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you set and achieve personal goals?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.4, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Sometimes", stressMagnitude: 0.7, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 3 },
                 { Answer: "Often", stressMagnitude: 0.9, anxietyMagnitude: 0.8, mentalStabilityMagnitude: 2 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 1, mentalStabilityMagnitude: 1 }
             ]
         },
         {
             Question: "How often do you experience feelings of shame?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.8, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 3 },
                 { Answer: "Almost Always", stressMagnitude: 1, anxietyMagnitude: 0.9, mentalStabilityMagnitude: 2 }
             ]
         },
         {
             Question: "How often do you feel a sense of excitement or anticipation about the future?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.1, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Sometimes", stressMagnitude: 0.4, anxietyMagnitude: 0.2, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.6, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
                 { Answer: "Almost Always", stressMagnitude: 0.8, anxietyMagnitude: 0.6, mentalStabilityMagnitude: 2 }
             ]
         },
         {
             Question: "How often do you feel a sense of satisfaction with your personal growth and progress?",
             PossibleAnswers: ["Rarely", "Sometimes", "Often", "Almost Always"],
             AnswerDetails: [
                 { Answer: "Rarely", stressMagnitude: 0.2, anxietyMagnitude: 0.1, mentalStabilityMagnitude: 5 },
                 { Answer: "Sometimes", stressMagnitude: 0.5, anxietyMagnitude: 0.3, mentalStabilityMagnitude: 4 },
                 { Answer: "Often", stressMagnitude: 0.7, anxietyMagnitude: 0.4, mentalStabilityMagnitude: 3 },
                 { Answer: "Almost Always", stressMagnitude: 0.9, anxietyMagnitude: 0.5, mentalStabilityMagnitude: 2 }
             ]
         },
     ];
      return mentalHealthQuestionsSet5;  
   }
}