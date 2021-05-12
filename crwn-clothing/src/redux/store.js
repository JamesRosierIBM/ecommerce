import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
//import the rootReducer that is all the reducers combined
import rootReducer from './root-reducer';

//this lets us easily add more middleware later
const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

export default {store, persistor};