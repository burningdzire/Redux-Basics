import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import mathReducer from "./reducer/mathReducer"
import userReducer from "./reducer/userReducer"

const store = createStore(
    combineReducers({ math: mathReducer, user: userReducer }),
    {},
    applyMiddleware(logger)
);

export default store;