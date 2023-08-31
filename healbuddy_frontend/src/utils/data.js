export const userQuery = (userID) => {
    const query = `*[_type == 'user' && _id == '${userID}']`;
    return query;
}

export const feedbackQuery = () => {
    const query = `*[ _type == 'feedback'] | order(_createdAt desc) {
            _id,
            feedbackMsg,
            name,
            postedBy -> {
                _id,
                image
            }
        }`

        return query;
}