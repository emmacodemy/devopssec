import { combineReducers, applyMiddleware, createStore  } from "redux";
import logger  from 'redux-logger'
import thunk from "redux-thunk";
import sessionReducer from "./Sessions/sessionReducer"

const reducer = combineReducers({
    sessions: sessionReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store