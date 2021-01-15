const app = document.getElementById("app-main");
const DELAY = 35;
const unBlockSreen = () => {
  app.classList.remove("loading");
  app.classList.add("cli-app-main");
};
window.onload = setTimeout(unBlockSreen, DELAY);
