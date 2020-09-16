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
  max-height: ${(props) => (props.open ? "0" : "100px")};
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
}) => {
  const [open, OpenClose] = useState(true);
  return (
    <DropDownMain open={open}>
      <DropDownTitle open={open}>
        {selectedItem}

        <ControllWrapper
          open={open}
          onClick={() => {
            open ? OpenClose(false) : OpenClose(true);
          }}
        >
          <LeftDivider open={open}>{"["}</LeftDivider>
          <AnimatedIcon open={open}>{"|>"}</AnimatedIcon>
          <RightDivider open={open}>{"]"}</RightDivider>
        </ControllWrapper>
      </DropDownTitle>
      <DropDownWrapper open={open}>{children}</DropDownWrapper>
    </DropDownMain>
  );
};

export default DropDownMenu;
