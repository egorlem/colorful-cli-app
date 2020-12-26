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

const LineDndContainer: React.FC = (state) => {
  // STATE
  const {
    psOneOptions: { selectedLine, status },
    result: { resPsOneLine },
    selectPsOneLine,
    deleteCurrentLine,
  } = state as any;

  function findCard<T, R>(id: T, lineindex: R) {
    const [card] = resPsOneLine[lineindex].filter((c) => `${c.id}` === id);
    return {
      card,
      index: resPsOneLine[lineindex].indexOf(card),
      lineindex,
    };
  }

  const displayCard = (cards, lineindex: string) => {
    return cards.map((card: object) => {
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
    });
  };

  const displayLines = resPsOneLine.map((line: number, index: string) => {
    const cardline = displayCard(line, index);
    return (
      <SelectedLineWrapper
        flag={selectedLine === index}
        key={`line${index}`}
        id={index}
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
  });
  return (
    <div>
      <div>
        <StatusLineHeader {...state} />
      </div>
      <AllLines>{displayLines}</AllLines>
    </div>
  );
};

export default LineDndContainer;
