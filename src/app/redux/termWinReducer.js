import { store } from "./store";
import update from "immutability-helper";

export function termWinReaducer(state = [], action) {
  switch (action.type) {
    case "TERM/EDIT_MODE_ON":
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
    case "TERM/EDIT_MODE_OFF":
      return update(state, {
        items: {
          $apply: (items) => {
            return items.map((e) => {
              return { ...e, fg: "" };
            });
          },
        },
      });
  }
  return state;
}

export const editModOn = (payload) => {
  return { type: "TERM/EDIT_MODE_ON", payload };
};
export const editModOff = () => {
  return { type: "TERM/EDIT_MODE_OFF" };
};

/*   

////  LS должен быть initial state для результируюшейго редюсера
//// Когла приложение запускается стейт должен браться ил LS

после каждого екшена с этой ветке LS должен перезаписыватся 


*/
