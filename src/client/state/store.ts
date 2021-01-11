import thunk from 'redux-thunk';
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { saveState, loadState } from "./localstorage/localstorage";
//import { composePromptResultMiddleware } from "./middleware/promptresultmiddleware";
import { combineReducers } from "redux";
import * as reducers from './redux'

export const rootreducer = combineReducers(reducers);
const persistedState = loadState();
//composePromptResultMiddleware;
//applyMiddleware(logger);
export const store = createStore(
  rootreducer,
  //persistedState,
  applyMiddleware(logger, thunk)
);

//composePromptResultMiddleware

// store.subscribe(() => {
//   saveState({
//     result: store.getState().result,
//   });
// });
