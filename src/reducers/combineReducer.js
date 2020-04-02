import { createStore, combineReducers } from 'redux';
import pageReducer from './pageReducer';

export const myStore = createStore(combineReducers({
    pR: pageReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());