import { combineReducers } from 'redux'

import highscore from './highscore'
import playerReducer from './playerReducer';
import currentGameReducer from './currentGameReducer';

export default combineReducers({
	highscore,
	player: playerReducer,
	currentGame: currentGameReducer
})

