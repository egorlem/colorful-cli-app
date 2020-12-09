import React from 'react';
import './codearea.scss';

export const CodeArea = (state) => {
  let col = new Array(100).fill('M').map((e, i) => (
    <span style={{ opacity: '0.3' }} key={`col${i}`}>
      {e}
    </span>
  ));
  const {
    code: { psonestring, variableList },
  } = state;

  const copyText = () => {
    const toCleapboard = [...variableList, '', ...psonestring];
    navigator.clipboard.writeText(toCleapboard.join('\n'));
  };

  const varlist = variableList.map((e) => {
    return <div>{e}</div>;
  });
  const result = psonestring.map((e) => {
    return <div>{e}</div>;
  });

  return (
    <div className="editor">
      <button onClick={copyText}>КНОПКА</button>
      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column">{varlist}</div>
      </div>
      <div className="editor-wrapper">
        <div className="editor__line">~</div>
        <div className="editor__column">{result}</div>
      </div>

      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column"> </div>
      </div>

      <div className="editor-wrapper">
        <div className="editor__line">ln</div>
        <div className="editor__column"> </div>
      </div>
    </div>
  );
};
