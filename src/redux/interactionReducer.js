import { store } from "./store";

let initialState = {
  modules: {
    bell: {
      color: false,
      code: "\\a",
      title: "ASCII bell character (07)",
      info: "",
    },
    date: {
      color: true,
      code: "\\d",
      title: 'The date in "W-M-Date" format',
      info: `the date in "Weekday Month Date" format (e.g., "Tue Dec 26")`,
    },
    hostname: {
      color: true,
      code: "\\h",
      title: "the hostname",
      info: `the date in "Weekday Month Date" format (e.g., "Tue Dec 26")`,
    },
  },
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
