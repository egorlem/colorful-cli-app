import { store } from "./store";
import update from "immutability-helper";
import { data } from "autoprefixer";

let initialState = {
  items: [
    {
      id: 1,
      text: "The hostname (short)",
      sequences: "LocalHost",
      code: "\\h",
    },
    { id: 2, text: "The base name of term", sequences: "ttys001", code: "\\l" },
    { id: 3, text: "The name of shell", sequences: "bash", code: "\\s" },
    { id: 4, text: "The current time", sequences: "16:00:03", code: "\\t" },
    { id: 5, text: "The username", sequences: "EgorL", code: "\\u" },
    { id: 6, text: "The version of shell", sequences: "3.2", code: "\\v" },
    { id: 7, text: "The version of shell", sequences: "3.2", code: "\\v" },
    { id: 8, text: "The version of shell", sequences: "3.2", code: "\\v" },
    { id: 9, text: "space", sequences: " ", code: "\\v" },
  ],
  ok: "immutablility",
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
  }
  return state;
}

export const setNewLine = (payload) => {
  return { type: "EDIT_NEW_LINE", payload };
};
