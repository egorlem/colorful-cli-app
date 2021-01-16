import React from 'react';
import styled from 'styled-components';
import { ElementStatus } from './elemstatus';
import { ElementControl } from './elementcontroll';
import { LineButton } from '../../../global/buttons.styled';
import { ISFlag } from '../../../../types/global';

const LineHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 32px;
`;
const CurrentElementPreviewWrapper = styled.div`
  display: flex;
`;
const CELPTitle = styled.div`
  color: ${(props: ISFlag) => (props.flag ? '#e9e9e9' : '#474747')};
  font-size: 1.2rem;
  font-weight: 300;
  &:after {
    content: '::';
    color: ${(props: ISFlag) => (props.flag ? '#474747' : '#474747')};
    padding: 0 4px;
  }
`;

export const StatusLineHeader: React.FC = (state: any) => {
  const {
    psOneOptions: { status },
    addNewLine,
  } = state as any;

  const handler = (): void => {
    if (!status) addNewLine();
  };

  console.log(status);

  return (
    <LineHeaderWrapper>
      <CurrentElementPreviewWrapper>
        <CELPTitle flag={status}>Slected element</CELPTitle>
        {status && <ElementStatus {...state} />}
      </CurrentElementPreviewWrapper>
      {!status && (
        <LineButton flag={status} onClick={handler}>
          Add new line
        </LineButton>
      )}
      {status === 'UDATE_CURRENT' && <ElementControl />}
    </LineHeaderWrapper>
  );
};
