import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import itemsReducer from "./itemspagereducer/pageReducer";
import sessionReducer from "./Sessions/sessionReducer";
import cartReducer from "./cartreducer/cartreducer"
import notificationReducer from "./Notification";
import historyReducer from "./historyPage/historyreducer";
import statisticsReducer from "./StatPage/Statisticsreducer";

const reducer = combineReducers({
  sessions: sessionReducer,
  items: itemsReducer,
  cart: cartReducer,
  notification: notificationReducer,
  history: historyReducer,
  statistics: statisticsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
