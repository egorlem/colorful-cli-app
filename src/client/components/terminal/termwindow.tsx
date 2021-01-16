import React from 'react';
import { useSelector } from 'react-redux';
import { IPsOneLineModel } from '../../state/redux/crud/types';
import { TAppState } from '../../state/store';
import { IPromptElem } from '../../types/global';
import './term.scss';

//let vt220Short = new Array(80).fill("░");
let vt220Lont = new Array(134);

const Window: React.FC = (): JSX.Element => {
  const { psonemodel }: IPsOneLineModel = useSelector((state: TAppState) => {
    return { psonemodel: state.crud.psonecrud.psonemodel };
  });

  // const Crs = () => {
  //   return <span style={{ color: 'white' }}>{'$ |'}</span>;
  // };

  const displaycard = (cards: IPromptElem[], lineindex: number) => {
    return cards.map((card: IPromptElem) => {
      let decoration = card.style.map((e: any) => e.style).join(' ');
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

  const promptlines = psonemodel.map((line: IPromptElem[], index: number) => {
    const lastindex = (psonemodel.length - 1) as number;
    const cardline = displaycard(line, index);
    return (
      <div key={`termline${index}`}>
        {cardline}
        {'█'}
      </div>
    );
  });

  return (
    <>
      <div className="shell-window">
        <div className="shell-window-header"> bash ⸻ 24 rows ⸻ 80 columns;</div>
        <div className="prompt">
          <div className="test--line short test-typing">{promptlines}</div>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = () => {
  return (
    <>
      <Window />
    </>
  );
};

export default TerminalWindow;
// IT IS a ematation of string with 80 sybols ok _______999999 000 GUEZWHOZZZZZ
