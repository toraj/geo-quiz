import * as types from '../actions/index';

const initialState = {
	name: '',
	highScore: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.START_GAME:
			return {...state, name: action.payload.name}
		default:
			return state;
	}
}
