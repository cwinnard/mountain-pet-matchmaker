import ACTIONS from './action';

const defaultState = {
    phase: 0,
    matches: [],
};

const matchesReducer = (state = defaultState, action) => {
    let newState = { ...state };
    switch (action.type) {
    case ACTIONS.Types.SET_MATCHES: {
        newState.matches = action.payload;
        newState.phase = 1;
        return newState;
    }
    default:
        return state;
  }
};

export default matchesReducer;
