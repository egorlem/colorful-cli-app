// term options menu open----close
const button = document.querySelector("span.options-btn__controll");
console.log(button);
const termMenuHandler = () => {
  const container = document.querySelector("div.options-btn");
  const modalwindow = document.querySelector("section.terminal-options");
  modalwindow.classList.contains("open")
    ? modalwindow.classList.remove("open")
    : modalwindow.classList.add("open");
};
button.addEventListener("click", termMenuHandler);
