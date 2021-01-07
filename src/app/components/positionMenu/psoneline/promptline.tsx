import React from 'react';
import PsOneItemMlt from './multylineElm';
import { StatusLineHeader } from './options/statuslineheader';
import { LineButton } from '../../global/buttons/basebnt';
import {
  SelectedLineWrapper,
  SingleLine,
  SingleLineTitle,
  AllLines,
} from './prompline.styled';
import { IPromptElem } from '../../../types/global';

const LineDndContainer: React.FC = (state) => {
  // STATE
  const {
    psOneOptions: { selectedLine, status },
    result: { resPsOneLine },
    selectPsOneLine,
    deleteCurrentLine,
  } = state as any;

  function findCard<T extends string, R extends number>(id: T, lineindex: R) {
    const [card]: [IPromptElem] = resPsOneLine[lineindex].filter(
      (c: IPromptElem) => `${c.id}` === id
    );
    return {
      card,
      index: resPsOneLine[lineindex].indexOf(card),
      lineindex,
    };
  }

  const displayCard = <T extends IPromptElem[], R extends number>(
    cards: T,
    lineindex: R
  ) => {
    return cards.map(
      <T extends IPromptElem>(card: T): JSX.Element => {
        return (
          <PsOneItemMlt
            key={card.id}
            id={`${card.id}`}
            text={card.sequences}
            findCard={findCard}
            state={state}
            curline={cards}
            lineindex={lineindex}
          />
        );
      }
    );
  };

  const displayLines = resPsOneLine.map(
    (line: IPromptElem[], index: number) => {
      const cardline = displayCard(line, index);
      return (
        <SelectedLineWrapper
          flag={selectedLine === index}
          key={`line${index}`}
          id={`${index}`}
          onClick={() => {
            selectPsOneLine(index);
          }}
        >
          <SingleLineTitle>
            {'Line '}
            {index + 1}
            {index !== 0 && (
              <LineButton
                flag={status}
                onClick={() => {
                  if (!status) deleteCurrentLine({ index: index });
                }}
              >
                {'Remove line'}
              </LineButton>
            )}
          </SingleLineTitle>
          <SingleLine flag={selectedLine === index}>{cardline}</SingleLine>
        </SelectedLineWrapper>
      );
    }
  );
  return (
    <div>
      <div>
        Рендер?
        <StatusLineHeader {...state} />
      </div>
      <AllLines>{displayLines}</AllLines>
    </div>
  );
};

export default LineDndContainer;
