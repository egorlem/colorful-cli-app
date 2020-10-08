import React, { useState } from "react";
import styled from "styled-components";
import {
  ControllWrapper,
  AnimatedIcon,
  LeftDivider,
  RightDivider,
} from "./controls";
const DropDownMain = styled.div`
  font-family: "JetBrains", monospace;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const DropDownWrapper = styled.div`
  transition: max-height 0.3s, opacity 0.3s;
  width: 100%;
  visibility: ${(props) => (props.open ? "hidden" : "visible")};
  opacity: ${(props) => (props.open ? "0" : "1")};
  max-height: ${(props) => (props.open ? "0" : "130px")};
  background: white;
  overflow-y: auto;
`;
const DropDownTitle = styled.div`
  font-weight: 500;
  transition: padding-bottom 0.3s;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props) => (props.open ? "0" : "4px")};
`;
const DropDownMenu = ({
  children,
  selectedItem,
  preview = null,
  flag = true,
  accessory,
  handler,
}) => {
  return (
    <DropDownMain open={flag}>
      <DropDownTitle open={flag}>
        {preview}
        {selectedItem}
        <ControllWrapper open={flag} onClick={() => handler(accessory)}>
          <LeftDivider open={flag}>{"["}</LeftDivider>
          <AnimatedIcon open={flag}>{"❯"}</AnimatedIcon>
          <RightDivider open={flag}>{"]"}</RightDivider>
        </ControllWrapper>
      </DropDownTitle>
      <DropDownWrapper open={flag}>{children}</DropDownWrapper>
    </DropDownMain>
  );
};

export default DropDownMenu;
