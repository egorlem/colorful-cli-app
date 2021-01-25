import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { codeSelectors } from '../../state/redux/code/';
import { CopyButton } from '../global/buttons.styled';

const HeaderOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: #dadada;
  background: #303030;
  border: 1px solid #3a3a3a;
  padding: 8px 8px 8px 8px;
  margin-bottom: 8px;
`;
export const HeaderOptionsButtons = styled.div``;
export const HeaderOptionsElementStatus = styled.div`
  line-height: 3rem;
`;

const CodeHeader: React.FC = () => {
  const resultText = useSelector(codeSelectors.getResultForCopying);

  const shell = 'zsh';

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(resultText);
      alert('text skipirovan');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <HeaderOptionsWrapper>
        <HeaderOptionsElementStatus>
          {` copy and paste into your .${shell}rc file`}
        </HeaderOptionsElementStatus>
        <HeaderOptionsButtons>
          <CopyButton onClick={copyHandler}>{'Copy'}</CopyButton>
        </HeaderOptionsButtons>
      </HeaderOptionsWrapper>
    </div>
  );
};

export default CodeHeader;
