export default {
    name: 'feedback',
    title: 'Feedback',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'feedbackMsg',
            title: 'FeedbackMsg',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        }
    ]
}