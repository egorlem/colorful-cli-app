import { store } from "./store";
import update from "immutability-helper";

let initialState = {
  psOptionsSelect: {
    isOpen: false,
  },
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
  console.log(payload);
  return { type: "ADD_NEW_PROMPT_ELEMENT", payload };
};
