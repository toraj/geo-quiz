// Import actions from '../actions'

const INITIAL_STATE = {
  player: {
    name: "",
    highScore: 0,
  },
  currentGame: {
    questions: [],
    score: 0,
    currentQuestionIndex: 0,
    playerAnswers: []
  }
};

export default function(state = INITIAL_STATE, action) {
  const { type } = action;
  switch (type) {
    default:
      return state
  }
}
