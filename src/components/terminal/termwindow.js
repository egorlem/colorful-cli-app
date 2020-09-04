import React from "react";
import "./term.scss";

//let vt220Short = new Array(80).fill("░");
let vt220Lont = new Array(134);

const Window = () => {
  let vt220Short = new Array(80).fill(" ");
  let vt220Long = new Array(134).fill("░");
  let colums = new Array(23).fill("");

  let layOut = colums.map((e) => {
    let shortString = vt220Short.map((e) => {
      return <span className="term-short-symbol">{e}</span>;
    });
    return <div className="test--line short">{shortString}</div>;
  });

  let shortString = vt220Short.map((e) => {
    return <span className="term-short-symbol">{e}</span>;
  });
  let longString = vt220Long.map((e) => {
    return <span className="term-long-symbol">{e}</span>;
  });
  return (
    <>
      <div className="shell-window">
        <div className="shell-window-header"> bash -- </div>
        <div className="prompt">
          {layOut}
          <div className="test--line short test-typing">
            [MacBook@EgorL] IT IS a ematation of string with 80 sybols
            ok_______999999 000G1
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
