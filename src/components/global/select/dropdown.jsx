import React, { useState } from "react";
import styled from "styled-components";
import {
  ControllWrapper,
  AnimatedIcon,
  LeftDivider,
  RightDivider,
} from "./controls";
const DropDownMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const DropDownWrapper = styled.div`
  transition: max-height 0.4s, opacity 0.4s;
  width: 100%;
  visibility: ${(props) => (props.open ? "hidden" : "visible")};
  opacity: ${(props) => (props.open ? "0" : "1")};
  max-height: ${(props) => (props.open ? "0" : "130px")};
  background: white;
  overflow-y: auto;
`;
const DropDownTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props) => (props.open ? "0" : "4px")};
`;
const DropDownMenu = ({
  children,
  selectedItem = "Select escape sequences",
  preview = null,
  isOpen = true,
  id,
  handler,
}) => {
  const [open, OpenClose] = useState(true);
  return (
    <DropDownMain open={isOpen}>
      <DropDownTitle open={isOpen}>
        {preview}
        {selectedItem}
        <ControllWrapper open={isOpen} onClick={() => handler(id)}>
          <LeftDivider open={isOpen}>{"["}</LeftDivider>
          <AnimatedIcon open={isOpen}>{"|>"}</AnimatedIcon>
          <RightDivider open={isOpen}>{"]"}</RightDivider>
        </ControllWrapper>
      </DropDownTitle>
      <DropDownWrapper open={isOpen}>{children}</DropDownWrapper>
    </DropDownMain>
  );
};

export default DropDownMenu;
