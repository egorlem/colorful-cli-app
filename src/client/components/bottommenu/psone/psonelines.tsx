import React from 'react';
import PsOneSingleLine from './psoneontions/psonesingleline';
//import { StatusLineHeader } from '../options/statuslineheader';
//import { LineButton } from '../../global/buttons/basebnt';
import {
  SelectedLineWrapper,
  SingleLine,
  LineNumber,
  //  SingleLineTitle,
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

  const displayCard = (cards: IPromptElem[], lineindex: number) => {
    return cards.map(
      (card: IPromptElem): JSX.Element => {
        return (
          <PsOneSingleLine
            key={card.id}
            id={`${card.id}`}
            text={card.sequences}
            findCard={findCard}
            curline={cards}
            lineindex={lineindex}
          />
        );
      }
    );
  };

  const displayLines = psonemodel.map((line: IPromptElem[], index: number) => {
    const cardline = displayCard(line, index);
    const deleteLine = () => {
      if (!status) dispatch(crudActions.deleteCurrentLine({ index: index }));
    };
    const selectLine = () => {
      dispatch(styleActions.selectPsOneLine(index));
    };
    return (
      <SelectedLineWrapper
        flag={selectedLine === index}
        key={`line${index}`}
        id={`${index}`}
      >
        {/* <SingleLineTitle>
          {index !== 0 && (
            <LineButton flag={!!status} onClick={deleteLine}>
              {'Remove line'}
            </LineButton>
          )}
        </SingleLineTitle> */}
        <LineNumber onClick={selectLine}>{`Line ${index + 1}`}</LineNumber>
        <SingleLine flag={selectedLine === index}>{cardline}</SingleLine>
      </SelectedLineWrapper>
    );
  });

  return <AllLines>{displayLines}</AllLines>;
};

export default PsOneLines;
