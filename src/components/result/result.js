import { store } from "../../redux/store";
import { addNewLine } from "../../redux/resultReducer";
//
//  modalLayout.insertAdjacentHTML
const { result } = store.getState();
const resultTable = document.querySelector("table.result");
const setLlines = () => {
  let state = result.sh;
  let lines = state.map(
    (e) => `<tr class="result__string">
  <td class="result__line">${e}</td>
  <td class="result__text">${result.text}</td>
  </tr>`
  );
  return lines.join("");
};
const createLayout = () => {
  const child = document.querySelector("tbody");
  resultTable.removeChild(child);
  resultTable.insertAdjacentHTML("afterbegin", setLlines());
};
createLayout();

store.subscribe(createLayout);
const copyBtn = document.querySelector("button.result-header__copybtn");
copyBtn.addEventListener("click", () => {
  store.dispatch(addNewLine());
});
