import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TAppState } from '../../state/store';
import './codearea.scss';

export const CodeArea: React.FC = () => {
  // let col = new Array(100).fill('M').map((e, i) => (
  //   <span style={{ opacity: '0.3' }} key={`col${i}`}>
  //     {e}
  //   </span>
  // ));

  const { psonestring, variableList } = useSelector((state: TAppState) => {
    return {
      psonestring: state.code.code.psonestring,
      variableList: state.code.code.variableList,
    };
  });

  // const {
  //   code: { psonestring, variableList },
  // } = state;

  // const copyText = () => {
  //   const toCleapboard = [...variableList, '', ...psonestring];
  //   navigator.clipboard.writeText(toCleapboard.join('\n'));
  // };

  const varlist = variableList.map((e: any, i: number) => {
    return <div key={i}>{e}</div>;
  });
  const result = psonestring.map((e: any, i: number) => {
    return <div key={i}>{e}</div>;
  });

  return (
    <div className="editor">
      {/* <button onClick={copyText}>КНОПКА</button> */}
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
