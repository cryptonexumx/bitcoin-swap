import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import rootReducer from './reducers';

const logger = createLogger({});

const middleware = [logger];

const store =  createStore(rootReducer, applyMiddleware(...middleware));

export default store;
