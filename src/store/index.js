import {applyMiddleware, compose, createStore} from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));
store.subscribe(() =>
    console.log(store.getState())
);

export default store;