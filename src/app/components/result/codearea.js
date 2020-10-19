import React from "react";
import "./codearea.scss";

const HighLighter = (type) => {
  switch (type) {
    case "SH/VARIABLE":
      return "#83aed9";
    case "SH/STRING":
      return "#e9e9e9";
    case "SH/COMMENT":
      return "#7d7d7d";
    case "SH/BRACKET":
      return "#3675af";
  }
};

export const CodeArea = (state) => {
  let col = new Array(100).fill("M").map((e, i) => (
    <span style={{ opacity: "0.3" }} key={`col${i}`}>
      {e}
    </span>
  ));

  const {
    code: { bgVar, fgVar, codeline, toCB },
  } = state;

  const bg = bgVar.map((e) => {
    let string = e.syntax.map((e) => {
      let color = HighLighter(e.type);
      return <span style={{ color: color }}>{e.text}</span>;
    });
    return (
      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column">{string}</div>
      </div>
    );
  });
  const fg = fgVar.map((e) => {
    let string = e.syntax.map((e) => {
      let color = HighLighter(e.type);
      return <span style={{ color: color }}>{e.text}</span>;
    });
    return (
      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column">{string}</div>
      </div>
    );
  });
  const cdline = codeline.map((e, i, arr) => {
    let sub = e.rcStringPart.map((e) => e.syntax).flat();

    let string = sub.map((e, i) => {
      let color = HighLighter(e.type);
      return <span style={{ color: color }}>{e.text}</span>;
    });
    return (
      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column">
          {i === 0 && 'PS1="'}
          {string}
          {arr.length - 1 === i && '"'}
        </div>
      </div>
    );
  });
  const textarr = ["\tst1\n", "\tst2\n", "st4"].join(" ");
  const copyText = () => {
    navigator.clipboard.writeText(toCB);
  };
  return (
    <div className="editor">
      <button onClick={copyText}>КНОПКА</button>
      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column">{col}</div>
      </div>
      <div className="editor-wrapper">
        <div className="editor__line">~</div>
        <div className="editor__column"> </div>
      </div>
      {bg}
      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column"> </div>
      </div>
      {fg}
      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column"> </div>
      </div>
      {cdline}
    </div>
  );
};
