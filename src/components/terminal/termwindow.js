import React from "react";
import { connect } from "react-redux";
import "./term.scss";

//let vt220Short = new Array(80).fill("░");
let vt220Lont = new Array(134);

const Window = ({ state }) => {
  let line = state.curLine.map((e) => (
    <span
      key={e.id}
      style={{ color: e.fg.hexString, background: e.bg.hexString }}
    >
      {e.sequences}
    </span>
  ));

  let vt220Short = new Array(80).fill("M");
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
          <div className="test--line short test-typing">
            {layOut}
            {line}
          </div>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = (state) => {
  return (
    <div className="term-bg-container">
      <Window state={state} />
    </div>
  );
};

const mstp = (state) => {
  return { curLine: state.result.resPsOneLine };
};

export default connect(mstp, null)(TerminalWindow);
// IT IS a ematation of string with 80 sybols ok _______999999 000 GUEZWHOZZZZZ
