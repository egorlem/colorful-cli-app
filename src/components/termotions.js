/* 

import { store } from "../redux/store";
import { initSetings } from "../redux/termsetingsReducer";

const setTermName = ({ term }) => {
  const termTitle = document.querySelector("div.terminal-select");
  termTitle.textContent = term.term;
};
const setTermBaseFont = ({ term }) => {
  document.querySelector("div.terminal-font__name").textContent =
    term.font.name;
  document.querySelector("div.terminal-font__typeface").textContent =
    term.font.typeface;
  document.querySelector("div.terminal-font__size").textContent =
    term.font.size;
};

const setTermBaseColor = ({ term }) => {
  const darkline = document.querySelectorAll("div.term-color-line__item-d");
  darkline.forEach(
    (e) => (e.style.backgroundColor = term["colors"][e.id]["normal"]["rgb"])
  );
  const lightlien = document.querySelectorAll("div.term-color-line__item-l");
  lightlien.forEach(
    (e) => (e.style.backgroundColor = term["colors"][e.id]["bright"]["rgb"])
  );
};

const disclaimerCloseBtn = document.querySelector("span.disclaimer--close");
disclaimerCloseBtn.addEventListener("click", function () {
  this.closest("div.terminal-options-disclaimer").classList.add("close");
});
const termOptionsRender = () => {
  let state = store.getState();
  setTermName(state);
  setTermBaseFont(state);
  setTermBaseColor(state);
};
store.subscribe(termOptionsRender);
store.dispatch(initSetings());
*/
