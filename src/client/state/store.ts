import { IPsOneLineModel } from './redux/crud/types';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { saveState, loadState } from "./localstorage/localstorage";
//import { composePromptResultMiddleware } from "./middleware/promptresultmiddleware";
import { combineReducers } from "redux";
import * as reducers from './redux'

const rootreducer = combineReducers(reducers);

type TRootReducer = typeof rootreducer
export type TAppState = ReturnType<TRootReducer>

const persistedState = loadState();
//composePromptResultMiddleware;
//applyMiddleware(logger);
export const store = createStore(
  rootreducer,
  persistedState,
  applyMiddleware(logger, thunk)
);

//composePromptResultMiddleware

store.subscribe(() => {
  saveState({
    crud: store.getState().crud,
  });
});
