import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewLine,
  moveElementForward,
  moveElementBack,
  deleteSelectedElement,
} from '../../../../redux/resultreducer';
import {
  changeModeStatus,
  resetOptions,
  closeAllControls,
} from '../../../../redux/psoneoptionsreducer';
import {
  HeaderOptionsWrapper,
  HeaderOptionsButtons,
  HeaderOptionsElementStatus,
} from './linesoptionheader.styled';
import {
  AddLineButton,
  DeleteButton,
  ApplyButton,
} from '../../../global/buttons/basebnt';

const LineOptionsHeader: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => {
    return {
      status: state.psOneOptions.status,
      index: state.psOneOptions.orignIndex,
      lineIndex: state.psOneOptions.selectedLine,
    };
  });
  const addLine = () => dispatch(addNewLine());

  const applyHandler = () => {
    dispatch(changeModeStatus(null));
    dispatch(closeAllControls());
    dispatch(resetOptions());
  };

  const deleteHandler = () => {
    dispatch(
      deleteSelectedElement({
        index: state.index,
        lineIndex: state.lineIndex,
      })
    );
    dispatch(changeModeStatus(null));
    dispatch(resetOptions());
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
