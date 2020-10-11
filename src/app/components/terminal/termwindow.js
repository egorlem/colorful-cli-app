import React from "react";
import { connect } from "react-redux";
import "./term.scss";

//let vt220Short = new Array(80).fill("░");
let vt220Lont = new Array(134);

const Window = (state) => {
  const Crs = () => {
    return <span style={{ color: "white" }}>{"$ |"}</span>;
  };
  const {
    result: { resPsOneLine },
  } = state;
  const displaycard = (cards, lineindex) => {
    return cards.map((card) => {
      let decoration = card.style.join(" ");
      return (
        <span
          key={`term${card.id}`}
          style={{ color: card.fg.hexString, background: card.bg.hexString }}
          className={`${decoration}`}
        >
          {card.sequences}
        </span>
      );
    });
  };

  const mltline = resPsOneLine.map((line, index) => {
    const lastindex = resPsOneLine.length - 1;
    // console.log(lastindex);
    const cardline = displaycard(line, index);
    return (
      <div key={`termline${index}`}>
        {cardline}
        {/* {lastindex === index && <Crs />} */}
      </div>
    );
  });

  // let line = state.curLine.map((e) => {
  //   let decoration = e.style.join(" ");
  //   return (
  //     <span
  //       key={e.id}
  //       style={{ color: e.fg.hexString, background: e.bg.hexString }}
  //       className={`${decoration}`}
  //     >
  //       {e.sequences}
  //     </span>
  //   );
  // });

  // let vt220Short = new Array(80).fill("M");
  // let vt220Long = new Array(134).fill("░");
  // let colums = new Array(23).fill("");

  // let layOut = colums.map((e, i) => {
  //   let shortString = vt220Short.map((e, i) => {
  //     return (
  //       <span key={i} className="term-short-symbol">
  //         {e}
  //       </span>
  //     );
  //   });
  //   return (
  //     <div key={i} className="test--line short">
  //       {shortString}
  //     </div>
  //   );
  // });

  return (
    <>
      <div className="shell-window">
        <div className="shell-window-header"> bash ⸻ 24 rows ⸻ 80 columns;</div>
        <div className="prompt">
          <div className="test--line short test-typing">{mltline}</div>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = (state) => {
  return (
    <>
      <Window {...state} />
    </>
  );
};

const mstp = (state) => {
  return state;
};

export default connect(mstp, null)(TerminalWindow);
// IT IS a ematation of string with 80 sybols ok _______999999 000 GUEZWHOZZZZZ
