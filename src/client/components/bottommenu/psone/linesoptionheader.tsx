import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  HeaderOptionsWrapper,
  HeaderOptionsButtons,
  HeaderOptionsElementStatus,
} from './linesoptionheader.styled';
import {
  AddLineButton,
  DeleteButton,
  ApplyButton,
} from '../../global/buttons.styled';
import { crudActions } from '../../../state/redux/crud';
import { styleActions } from '../../../state/redux/style';
import { appConditionActions } from '../../../state/redux/condition';
import { TAppState } from '../../../state/store';
import { IPromptElem } from '../../../types/global';

const LineOptionsHeader: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const { status, index, lineIndex, psonemodel, currentElement } = useSelector(
    (state: TAppState) => {
      return {
        status: state.condition.appcondition.status,
        index: state.style.psoneelement.orignIndex,
        lineIndex: state.style.psoneelement.selectedLine,
        psonemodel: state.crud.psonecrud.psonemodel,
        currentElement: state.style.psoneelement.currentElement,
      };
    }
  );
  const addLine = () => dispatch(crudActions.addNewLine());

  const applyHandler = () => {
    dispatch(appConditionActions.changeModeStatus(null));
    dispatch(appConditionActions.closeAllControls());
    dispatch(styleActions.resetOptions());
  };

  const deleteHandler = () => {
    dispatch(
      crudActions.deleteSelectedElement({
        index: index,
        lineIndex: lineIndex,
      })
    );
    dispatch(appConditionActions.changeModeStatus(null));
    dispatch(styleActions.resetOptions());
  };

  function findCard(id = 0, lineindex: number) {
    const [card] = psonemodel[lineindex].filter(
      (c: IPromptElem) => +c.id === +id
    );
    return {
      card,
      index: psonemodel[lineindex].indexOf(card),
    };
  }

  const toForward = () => {
    const { card, index } = findCard(currentElement.id, lineIndex);
    let atIndex = index + 1;
    dispatch(
      crudActions.moveElementForward({
        atIndex: atIndex,
        card: card,
        index: index,
        lineIndex: lineIndex,
      })
    );
  };
  const toBack = () => {
    const { card, index } = findCard(currentElement.id, lineIndex);
    let atIndex = index - 1;
    dispatch(
      crudActions.moveElementBack({
        atIndex: atIndex,
        card: card,
        index: index,
        lineIndex: lineIndex,
      })
    );
  };

  return (
    <HeaderOptionsWrapper>
      <HeaderOptionsElementStatus>Инфо об элементе</HeaderOptionsElementStatus>
      <HeaderOptionsButtons>
        {!status && (
          <AddLineButton onClick={addLine}>Add new line</AddLineButton>
        )}
        {status === 'UPDATE' && (
          <>
            <div onClick={toForward}>вперед</div>
            <div onClick={toBack}>назад</div>
            <DeleteButton onClick={deleteHandler}>Delete</DeleteButton>
            <ApplyButton onClick={applyHandler}>Apply</ApplyButton>
          </>
        )}
      </HeaderOptionsButtons>
    </HeaderOptionsWrapper>
  );
};

export default LineOptionsHeader;
