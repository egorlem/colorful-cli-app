import React from 'react';
import { useSelector } from 'react-redux';
import { crudSelectors } from '../../state/redux/crud';
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
  const lastLineIndex = useSelector(crudSelectors.getLastLineIndex);

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
    const cursor = index === lastLineIndex ? '█' : '';
    const cardline = displaycard(line, index);
    return (
      <div key={`termline${index}`}>
        {cardline}
        {cursor}
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
