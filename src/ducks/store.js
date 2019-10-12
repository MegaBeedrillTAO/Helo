import {createStore, applyMiddleware, combineReducers} from 'redux';
import promise from 'redux-promise-middleware';
import reducer from './reducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    reducer,
    authReducer
})

export default createStore(rootReducer, applyMiddleware(promise));