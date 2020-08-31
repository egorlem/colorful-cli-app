import { store } from "./store";

let initialState = {
  text: `export PS1="\\e[0;31m\\V\\h "`,
  sh: [1, 2, 3],
};

export function psoneReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_LINE":
      state.sh.push(state.sh.length);
      return { ...state };
  }
  return state;
}

export const addNewLine = () => {
  return { type: "ADD_NEW_LINE" };
};
