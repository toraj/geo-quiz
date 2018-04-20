import { SET_QUESTIONS } from '../reducers/currentGameReducer';

export const setGameQuestions = (questions) => {
    return {
        type: SET_QUESTIONS,
        payload: {
            questions
        },
    };
};
