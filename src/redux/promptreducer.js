import { store } from "./store";
import update from "immutability-helper";

let initialState = {
  items: [
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
  cliOptions: [
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
    {
      id: 3,
      text: "The name of shell",
      sequences: "bash",
      code: "\\s",
      bg: "",
      fg: "",
    },
    {
      id: 4,
      text: "The current time",
      sequences: "16:00:03",
      code: "\\t",
      bg: "",
      fg: "",
    },
    {
      id: 5,
      text: "The username",
      sequences: "EgorL",
      code: "\\u",
      bg: "",
      fg: "",
    },
    {
      id: 6,
      text: "The version of shell",
      sequences: "3.2",
      code: "\\v",
      bg: "",
      fg: "",
    },
    {
      id: 7,
      text: "symbol symbol",
      sequences: " ",
      code: "\\v",
      bg: "",
      fg: "",
    },
  ],
  currentElement: {},
};

export function promptReaducer(state = initialState, action) {
  switch (action.type) {
    case "EDIT_NEW_LINE":
      return update(state, {
        items: {
          $splice: [
            [action.payload.index, 1],
            [action.payload.atIndex, 0, action.payload.card],
          ],
        },
      });
    case "EDIT_MODE_ON":
      return update(state, {
        items: {
          $apply: (items) => {
            return items.map((e) => {
              if (e.id === +action.payload) {
                return e;
              }
              return { ...e, fg: "#b4b4b4" };
            });
          },
        },
      });
    case "EDIT_MODE_OFF":
      return update(state, {
        items: {
          $apply: (items) => {
            return items.map((e) => {
              return { ...e, fg: "" };
            });
          },
        },
      });
    case "ADD_NEW_PROMPT_ELEMENT":
      return update(state, { items: { $push: [action.payload] } });
    case "SET_CURRENT_ELEMENT":
      return update(state, {
        currentElement: { $set: action.payload },
      });
  }
  return state;
}

export const setNewLine = (payload) => {
  return { type: "EDIT_NEW_LINE", payload };
};
export const editModOn = (payload) => {
  return { type: "EDIT_MODE_ON", payload };
};
export const editModOff = () => {
  return { type: "EDIT_MODE_OFF" };
};
export const addNewPromptElem = (payload) => {
  return { type: "ADD_NEW_PROMPT_ELEMENT", payload };
};
export const setCurrentElement = (payload) => {
  console.log(payload);
  return { type: "SET_CURRENT_ELEMENT", payload };
};
