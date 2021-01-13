import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  HeaderOptionsWrapper,
  HeaderOptionsButtons,
  HeaderOptionsElementStatus,
} from './psoneontions/linesoptionheader.styled';
import {
  AddLineButton,
  DeleteButton,
  ApplyButton,
} from '../../global/buttons/basebnt';
import { crudActions } from '../../../state/redux/crud';
import { styleActions } from '../../../state/redux/style';
import { appConditionActions } from '../../../state/redux/condition';
import { TAppState } from '../../../state/store';

const LineOptionsHeader: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const state = useSelector((state: TAppState) => {
    return {
      status: state.condition.appcondition.status,
      index: state.style.psoneelement.orignIndex,
      lineIndex: state.style.psoneelement.selectedLine,
    };
  });
  const addLine = () => dispatch(crudActions.addNewLine());

  const applyHandler = () => {
    dispatch(appConditionActions.changeModeStatus(null));
    dispatch(appConditionActions.closeAllControls());
    dispatch(styleActions.resetOptions());
  };

  const deleteHandler = () => {
    dispatch(
      crudActions.deleteSelectedElement({
        index: state.index,
        lineIndex: state.lineIndex,
      })
    );
    dispatch(appConditionActions.changeModeStatus(null));
    dispatch(styleActions.resetOptions());
  };
  return (
    <HeaderOptionsWrapper>
      <HeaderOptionsElementStatus>Инфо об элементе</HeaderOptionsElementStatus>
      <HeaderOptionsButtons>
        {!state.status && (
          <AddLineButton onClick={addLine}>Add new line</AddLineButton>
        )}
        {state.status === 'UPDATE' && (
          <>
            <DeleteButton onClick={deleteHandler}>Delete</DeleteButton>
            <ApplyButton onClick={applyHandler}>Apply</ApplyButton>
          </>
        )}
      </HeaderOptionsButtons>
    </HeaderOptionsWrapper>
  );
};

export default LineOptionsHeader;
