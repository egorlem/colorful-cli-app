import React from 'react';
import { connect } from 'react-redux';
import { IPromptElem } from '../../types/global';
import './term.scss';

//let vt220Short = new Array(80).fill("░");
let vt220Lont = new Array(134);

const Window: React.FC = (state) => {
  const Crs = () => {
    return <span style={{ color: 'white' }}>{'$ |'}</span>;
  };
  const {
    result: { resPsOneLine },
  } = state as any;
  const displaycard = <T extends Array<IPromptElem>, R extends number>(
    cards: T,
    lineindex: R
  ) => {
    return cards.map((card: IPromptElem) => {
      let decoration = card.style.join(' ');
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

  const mltline = resPsOneLine.map((line: any, index: number) => {
    const lastindex = resPsOneLine.length - 1;
    const cardline = displaycard(line, index);
    return <div key={`termline${index}`}>{cardline}</div>;
  });

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

const TerminalWindow = (state: any) => {
  return (
    <>
      <Window {...state} />
    </>
  );
};

const mstp = (state: any) => {
  return state;
};

export default connect(mstp, null)(TerminalWindow);
// IT IS a ematation of string with 80 sybols ok _______999999 000 GUEZWHOZZZZZ
