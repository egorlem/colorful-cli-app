import React from "react";
import InteractionLayOut from "./components/interactionsetings/interaction";
import { Result } from "./components/result/result";
import Nav from "./components/globsettings/rightmenu";
import TerminalWindow from "./components/terminal/termwindow";

function App() {
  return (
    <div className="global-style">
      <div className="shell-container">
        <InteractionLayOut />
        <TerminalWindow />
        <Nav />
      </div>
      <Result />
    </div>
  );
}
export default App;
