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
  AddLineSplitButton,
} from '../../global/buttons.styled';
import { crudActions, crudSelectors } from '../../../state/redux/crud';
import { styleActions } from '../../../state/redux/style';
import { appConditionActions } from '../../../state/redux/condition';
import { TAppState } from '../../../state/store';
import { IPromptElem } from '../../../types/global';

const LineOptionsHeader: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const { status, index, lineIndex, selectedLine } = useSelector(
    (state: TAppState) => {
      return {
        status: state.condition.appcondition.status,
        index: state.style.psoneelement.orignIndex,
        lineIndex: state.style.psoneelement.selectedLine,
        selectedLine: state.style.psoneelement.selectedLine,
      };
    }
  );
  const prevLineIndex: number = useSelector(crudSelectors.getPrevLineIndex);

  const addLine = () => dispatch(crudActions.addNewLine());

  const deleteSelectedLineHandler = () => {
    dispatch(crudActions.deleteCurrentLine({ index: selectedLine }));
    //dispatch(styleActions.selectPsOneLine(prevLineIndex));
  };

  const applyElementHandler = () => {
    dispatch(appConditionActions.changeModeStatus(null));
    dispatch(appConditionActions.closeAllControls());
    dispatch(styleActions.resetOptions());
  };

  const deleteElementHandler = () => {
    dispatch(
      crudActions.deleteSelectedElement({
        index: index,
        lineIndex: lineIndex,
      })
    );
    dispatch(appConditionActions.changeModeStatus(null));
    dispatch(styleActions.resetOptions());
    dispatch(appConditionActions.closeAllControls());
  };

  const isFirstLine = !status && selectedLine === 0;
  const isNotFirstLine = !status && selectedLine !== 0;
  const isUpdate = status === 'UPDATE';

  const AddLineButtonBlock = (
    <AddLineButton onClick={addLine}>Add new line</AddLineButton>
  );
  const LineCrudButtonBlock = (
    <>
      <DeleteButton onClick={deleteSelectedLineHandler}>
        Delete line
      </DeleteButton>
      <AddLineSplitButton onClick={addLine}>Add new line</AddLineSplitButton>
    </>
  );
  const ElementCrudButtonBlock = (
    <>
      <DeleteButton onClick={deleteElementHandler}>Delete</DeleteButton>
      <ApplyButton onClick={applyElementHandler}>Apply</ApplyButton>
    </>
  );

  return (
    <HeaderOptionsWrapper>
      <HeaderOptionsElementStatus>Инфо об элементе</HeaderOptionsElementStatus>
      <HeaderOptionsButtons>
        {isFirstLine && AddLineButtonBlock}
        {isNotFirstLine && LineCrudButtonBlock}
        {isUpdate && ElementCrudButtonBlock}
      </HeaderOptionsButtons>
    </HeaderOptionsWrapper>
  );
};

export default LineOptionsHeader;
