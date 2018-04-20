import {createSelector} from 'reselect'

export const SET_ANSWER = 'currentGame/SET_ANSWER';
export const SET_QUESTIONS = 'currentGame/SET_QUESTIONS';

const initialState = {
	questions: [],
	score: 0,
	currentQuestionIndex: 0,
	playerAnswers: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ANSWER: {
			return Object.assign({}, state, {
				score: state.score + action.data,
				currentQuestionIndex: state.currentQuestionIndex + 1
			})
		}
		case SET_QUESTIONS:
		{
			return {
				...state,
				questions: action.payload.questions
			}
		}
		default:
			return state;
	}
}

// action
export const setAnswer = (score) => {
	return { type: SET_ANSWER, data: score }
};

const questionsSelector = (state) => state.currentGame.questions;
const currentQuestionIndex = (state) => state.currentGame.currentQuestionIndex;

export const currentQuestionSelector = createSelector(
	[questionsSelector, currentQuestionIndex],
	(questions, index) => {
		return questions[index]
	}
);
