import { ITerm } from './types';
import { combineReducers } from 'redux';
import update from "immutability-helper";
import types from "./action.types"

export function termwindow(state = [] as any, action: ITerm) {
  switch (action.type) {
    case types.MODEON:
      return update(state, {
        items: {
          $apply: (items: any) => {
            return items.map((e: any) => {
              if (e.id === +action.payload) {
                return e;
              }
              return { ...e, fg: "#b4b4b4" };
            });
          },
        },
      });
    case types.MODEOFF:
      return update(state, {
        items: {
          $apply: (items: any): any => {
            return items.map((e: any) => {
              return { ...e, fg: "" };
            });
          },
        },
      });
  }
  return state;
}

const reducer = combineReducers({
  termwindow: termwindow
})

export default reducer 