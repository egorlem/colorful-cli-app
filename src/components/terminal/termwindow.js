import React from "react";
import "./term.scss";

//let vt220Short = new Array(80).fill("░");
let vt220Lont = new Array(134);

const Window = () => {
  let vt220Short = new Array(80).fill(" ");
  let vt220Long = new Array(134).fill("░");
  let colums = new Array(23).fill("");

  let layOut = colums.map((e, i) => {
    let shortString = vt220Short.map((e, i) => {
      return (
        <span key={i} className="term-short-symbol">
          {e}
        </span>
      );
    });
    return (
      <div key={i} className="test--line short">
        {shortString}
      </div>
    );
  });

  return (
    <>
      <div className="shell-window">
        <div className="shell-window-header"> bash ⸻ 24 rows ⸻ 80 columns;</div>
        <div className="prompt">
          {layOut}
          <div className="test--line short test-typing">
            [MacBook@EgorL] All settings presented in this menu are decoration.
            TTY01 123456
          </div>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = () => {
  return (
    <div className="term-bg-container">
      <Window />
    </div>
  );
};

export default TerminalWindow;
// IT IS a ematation of string with 80 sybols ok _______999999 000 GUEZWHOZZZZZ
