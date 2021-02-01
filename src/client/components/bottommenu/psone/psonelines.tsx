import React from 'react';
import PsOneSingleLine from './psoneontions/psonesingleline';
import {
  SelectedLineWrapper,
  SingleLine,
  LineNumber,
  AllLines,
} from './psonelines.styled';
import { IPromptElem } from '../../../types/global';
import { useDispatch, useSelector } from 'react-redux';
import { TAppState } from '../../../state/store';
import { crudActions } from '../../../state/redux/crud';
import { styleActions } from '../../../state/redux/style';

const PsOneLines: React.FC = () => {
  const dispatch = useDispatch();
  const { status, selectedLine, psonemodel } = useSelector(
    (state: TAppState) => {
      return {
        status: state.condition.appcondition.status,
        selectedLine: state.style.psoneelement.selectedLine,
        psonemodel: state.crud.psonecrud.psonemodel,
      };
    }
  );

  function findCard(id: string, lineindex: number) {
    const [card] = psonemodel[lineindex].filter(
      (c: IPromptElem) => `${c.id}` === id
    );
    return {
      card,
      index: psonemodel[lineindex].indexOf(card),
      lineindex,
    };
  }

  const displayCard = (cards: IPromptElem[], lineIndex: number) => {
    return cards.map(
      (card: IPromptElem): JSX.Element => {
        return (
          <PsOneSingleLine
            key={card.id}
            id={`${card.id}`}
            findCard={findCard}
            lineIndex={lineIndex}
          />
        );
      }
    );
  };

  const displayLines = psonemodel.map(
    (line: IPromptElem[], lineIndex: number) => {
      const cardline = displayCard(line, lineIndex);

      const deleteLine = () => {
        if (!status)
          dispatch(crudActions.deleteCurrentLine({ index: lineIndex }));
      };

      const selectLine = () => {
        if (!status) {
          dispatch(styleActions.selectPsOneLine(lineIndex));
        }
      };
      const isSelectible = selectedLine === lineIndex && !status;

      return (
        <SelectedLineWrapper
          flag={isSelectible}
          key={`line${lineIndex}`}
          id={`${lineIndex}`}
        >
          {/* <SingleLineTitle>
          {index !== 0 && (
            <LineButton flag={!!status} onClick={deleteLine}>
              {'Remove line'}
            </LineButton>
          )}
        </SingleLineTitle> */}
          <LineNumber isSelectible={isSelectible} onClick={selectLine}>{`Line ${
            lineIndex + 1
          }`}</LineNumber>
          <SingleLine flag={isSelectible}>{cardline}</SingleLine>
        </SelectedLineWrapper>
      );
    }
  );

  return <AllLines>{displayLines}</AllLines>;
};

export default PsOneLines;
