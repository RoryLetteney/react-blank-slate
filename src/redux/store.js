// NPM PACKAGE IMPORTS
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// REDUX IMPORTS
import rootReducer from "./reducers";

// EXPORTS
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
