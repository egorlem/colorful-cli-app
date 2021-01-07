import React from 'react';
import styled from 'styled-components';
import { ISFlag } from '../../../types/global';
import {
  ControllWrapper,
  AnimatedIcon,
  LeftDivider,
  RightDivider,
} from './controls';
const DropDownMain = styled.div`
  font-family: 'JetBrains', monospace;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const DropDownWrapper = styled.div`
  font-size: 1.3rem;
  transition: max-height 0.3s, opacity 0.3s, margin-top 0.3s;
  width: 100%;
  visibility: ${(props: ISFlag) => (props.flag ? 'hidden' : 'visible')};
  opacity: ${(props: ISFlag) => (props.flag ? '0' : '1')};
  max-height: ${(props: ISFlag) => (props.flag ? '0' : '130px')};
  background: transparent;
  color: #dadada;
  overflow-y: auto;
  margin-top: ${(props: ISFlag) => (props.flag ? '0' : '6px')};
`;
const DropDownTitle = styled.div`
  transition: padding-bottom 0.3s;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props: ISFlag) => (props.flag ? '0' : '4px')};
`;
const DropDownMenu = ({
  children,
  selectedItem,
  preview = null,
  flag = true,
  accessory,
  handler,
}: any) => {
  return (
    <DropDownMain>
      <DropDownTitle flag={flag}>
        {preview}
        {selectedItem}
        <ControllWrapper flag={flag} onClick={() => handler(accessory)}>
          <LeftDivider flag={flag}>{'['}</LeftDivider>
          <AnimatedIcon flag={flag}>{'❯'}</AnimatedIcon>
          <RightDivider flag={flag}>{']'}</RightDivider>
        </ControllWrapper>
      </DropDownTitle>
      <DropDownWrapper flag={flag}>{children}</DropDownWrapper>
    </DropDownMain>
  );
};

export default DropDownMenu;
