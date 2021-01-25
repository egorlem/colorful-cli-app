import React from 'react';
import { CopyButton } from '../global/buttons.styled';
import styled from 'styled-components';

const HeaderOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: #dadada;
  background: #303030;
  margin-left: 10px; // ??? УБРАТЬ ПОЗЖЕ у всего меню должен быть margin
  border: 1px solid #3a3a3a;
  padding: 8px 8px 8px 8px;
`;
export const HeaderOptionsButtons = styled.div``;
export const HeaderOptionsElementStatus = styled.div`
  line-height: 3rem;
`;

const CodeHeader: React.FC = () => {
  const shell = 'zsh';

  return (
    <div>
      <HeaderOptionsWrapper>
        <HeaderOptionsElementStatus>
          {` copy and paste into your .${shell}rc file`}
        </HeaderOptionsElementStatus>
        <HeaderOptionsButtons>
          <CopyButton>{'Copy'}</CopyButton>
        </HeaderOptionsButtons>
      </HeaderOptionsWrapper>
    </div>
  );
};

export default CodeHeader;
