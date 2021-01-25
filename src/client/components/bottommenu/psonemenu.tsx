import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PsOneLines from './psone/psonelines';
import LineOptionsHeader from './psone/linesoptionheader';
import { TAppState } from '../../state/store';
import { styleActions } from '../../state/redux/style';

const PromptLineStyleWrapper = styled.div`
  background: #303030;
  color: #dadada;
  border: 1px solid #3a3a3a;
  padding: 8px 8px 16px 8px;
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
