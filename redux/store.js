import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import ridesReducer from './reducers';

const rootReducer = combineReducers({ridesReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
