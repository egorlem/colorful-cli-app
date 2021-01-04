import React, { useEffect } from 'react';
import './codearea.scss';
import axios from 'axios';

export const CodeArea: React.FC = (state: any) => {
  const fetch = () => {
    axios
      .post('http://localhost:5000/api/result/test', { test: 'Test' })
      .then((response) => {
        const [obj] = response.data;
        alert(obj.text);
      });
  };
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

  const varlist = variableList.map((e: string) => {
    return <div>{e}</div>;
  });
  const result = psonestring.map((e: string) => {
    return <div>{e}</div>;
  });

  return (
    <div className="editor">
      <button onClick={copyText}>КНОПКА</button>
      <button onClick={fetch}>запрос</button>
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
