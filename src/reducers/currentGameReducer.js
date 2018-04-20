import {createSelector} from 'reselect'

export const SET_ANSWER = 'currentGame/SET_ANSWER';
export const SET_QUESTIONS = 'currentGame/SET_QUESTIONS';

const initialState = {
	questions: [],
	score: 0,
	currentQuestionIndex: 0,
	playerAnswers: [],
	gameStarted: false
};

export default (state = initialState, action) => {
	
	return state
}

const questionsSelector = (state) => state.currentGame.questions;
const currentQuestionIndex = (state) => state.currentGame.currentQuestionIndex;

export const currentQuestionSelector = createSelector(
	[questionsSelector, currentQuestionIndex],
	(questions, index) => {
		return questions[index]
	}
);
