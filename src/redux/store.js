import { createStore } from "redux";

import matchesReducer from './reducer';

export default function configureStore(initialState) {
    const store = createStore(matchesReducer, initialState);
    return store;
}
