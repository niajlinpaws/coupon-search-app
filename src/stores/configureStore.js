/* Importing Package Dependencies */
import { createStore, applyMiddleware } from "redux";
import { multiClientMiddleware } from "redux-axios-middleware";
import thunkMiddleware from "redux-thunk";

/* Importing client & 
  reducers config object 
  to create store 
*/
import clients from "./clients";
import rootReducer from "../reducers";

/* Setting up middleware 
  to intercept & perform 
  asynchronous operations 
*/
const middlewares = [
  thunkMiddleware,
  multiClientMiddleware(clients),
];

export default () => {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return { store };
};
