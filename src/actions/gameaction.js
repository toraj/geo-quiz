import * as types from './index';

export const startGame = (name) => ({
    type: types.START_GAME,
    payload: {name: name}
});

