import { store } from "./store";
import update from "immutability-helper";

let initialState = {
  resPsOneLine: [
    {
      id: 1,
      text: "The hostname (short)",
      sequences: "LocalHost",
      code: "\\h",
      bg: "",
      fg: "",
    },
    {
      id: 2,
      text: "The base name of term",
      sequences: "ttys001",
      code: "\\l",
      bg: "",
      fg: "",
    },
  ],
};

export function resultReducer(state = initialState, action) {
  switch (action.type) {
    case "DND/RESULT/EDIT_ELEMENT_POSITION":
      return update(state, {
        resPsOneLine: {
          $splice: [
            [action.payload.index, 1],
            [action.payload.atIndex, 0, action.payload.card],
          ],
        },
      });
    case "RESULT/ADD_NEW_PROMPT_ELEMENT":
      return update(state, { resPsOneLine: { $push: [action.payload] } });
  }
  return state;
}

export const changeElemPosition = (payload) => {
  return { type: "DND/RESULT/EDIT_ELEMENT_POSITION", payload };
};

export const addNewPromptElem = (payload) => {
  return { type: "RESULT/ADD_NEW_PROMPT_ELEMENT", payload };
};
