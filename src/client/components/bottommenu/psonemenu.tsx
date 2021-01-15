import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PsOneLines from './psone/psonelines';
import LineOptionsHeader from './psone/linesoptionheader';
import { TAppState } from '../../state/store';
import { styleActions } from '../../state/redux/style';

const PromptLineStyleWrapper = styled.div`
  background: #252526;
  color: #e9e9e9;
`;

const PsOnePositionMenu = () => {
  const dispatch = useDispatch();
  const { psonemodel } = useSelector((state: TAppState) => {
    return { psonemodel: state.crud.psonecrud.psonemodel };
  });
  useEffect(() => {
    dispatch(styleActions.selectPsOneLine(0));
  }, [psonemodel.length]);

  return (
    <PromptLineStyleWrapper>
      <LineOptionsHeader />
      <PsOneLines />
    </PromptLineStyleWrapper>
  );
};

export default PsOnePositionMenu;
