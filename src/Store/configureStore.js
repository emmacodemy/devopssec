import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import itemsReducer from "./itemspagereducer/pageReducer";
import sessionReducer from "./Sessions/sessionReducer";
import cartReducer from "./cartreducer/cartreducer"

const reducer = combineReducers({
  sessions: sessionReducer,
  items: itemsReducer,
  cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
