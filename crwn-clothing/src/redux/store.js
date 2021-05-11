import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//import the rootReducer that is all the reducers combined
import rootReducer from './root-reducer';

//this lets us easily add more middleware later
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;