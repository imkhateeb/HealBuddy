export default {
    name: 'initialAssessment',
    title: 'InitialAssessment',
    type: 'document',
    fields: [
        {
            name: 'question',
            title: 'question',
            type: 'string',
        },
        {
            name: 'answerGiven',
            title: 'AnswerGiven',
            type: 'string',
        },
        {
            name: 'mentalStabilityMagnitude',
            title: 'MentalStabilityMagnitude',
            type: 'string',
        },
        {
            name: 'anxietyMagnitude',
            title: 'AnxietyMagnitude',
            type: 'string',
        },
        {
            name: 'stressMagnitude',
            title: 'StressMagnitude',
            type: 'string',
        }
    ]
}