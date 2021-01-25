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
  font-family: 'consolas';
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
  background: #2b2b2b;
  color: #dadada;
  overflow-y: auto;
  margin-top: ${(props: ISFlag) => (props.flag ? '0' : '6px')};
  &::-webkit-scrollbar {
  width: 10px;
  opacity: 0.3;
}
  &::-webkit-scrollbar-track {
  background: transparent;
  border-left: 1px solid #3a3a3a;
}
  &::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.13);
}
  &::-webkit-scrollbar-thumb:hover {
  background: rgba(85, 85, 85, 0.1);
}
`;
const DropDownTitle = styled.div`
  color: ${(props: ISFlag) => (props.status ? '#dadada' : '#606060')};
  transition: padding-bottom 0.3s;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props: ISFlag) => (props.flag ? '0' : '10px')};
`;
const DropDownMenu = ({
  children,
  selectedItem,
  preview = null,
  flag = true,
  status = true,
  accessory,
  handler,
}: any) => {
  return (
    <DropDownMain>
      <DropDownTitle status={status} flag={flag}>
        {preview}
        {selectedItem}
        <ControllWrapper
          status={status}
          flag={flag}
          onClick={() => handler(accessory)}
        >
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

/**
 * ❮ 0x276E
 * ❯ 0x276F
 */
