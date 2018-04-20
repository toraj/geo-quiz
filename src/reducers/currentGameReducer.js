const initialState = {
	questions: [],
	score: 0,
	currentQuestionIndex: 0,
	playerAnswers: []
};

export default (state = initialState, action) => {
	switch(action.type) {
		case "SET_QUESTIONS":
		debugger;
			return {
				...state,
				questions: action.payload.questions
			}
	}
	return state
}
