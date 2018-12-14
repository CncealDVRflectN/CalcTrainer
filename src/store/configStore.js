import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

delete window.store
window.store = store
