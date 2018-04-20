

export const setGameQuestions = (questions) => {
    return {
        type: "SET_QUESTIONS",
        payload: {
            questions
        },
    };
};