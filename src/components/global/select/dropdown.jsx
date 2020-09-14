import React, { useState } from "react";
import styled from "styled-components";
import { ControllWrapper, Icon, LeftDivider, RightDivider } from "./controls";
const DropDownMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const DropDownWrapper = styled.ul`
  width: 100%;
  max-height: 100px;
  background: white;
  overflow-y: auto;
  display: ${(props) => (props.open ? "none" : "block")};
  visibility: ${(props) => (props.open ? "hidden" : "visible")};
`;
const DropDownTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DropDownMenu = ({
  children,
  selectedItem = "Select escape sequences",
}) => {
  const [open, OpenClose] = useState(true);
  return (
    <DropDownMain>
      <DropDownTitle>
        {selectedItem}
        <ControllWrapper
          open={open}
          onClick={() => {
            open ? OpenClose(false) : OpenClose(true);
          }}
        >
          <LeftDivider open={open}>{"["}</LeftDivider>
          <Icon open={open}>{"|>"}</Icon>
          <RightDivider open={open}>{"]"}</RightDivider>
        </ControllWrapper>
      </DropDownTitle>
      <DropDownWrapper open={open}>{children}</DropDownWrapper>
    </DropDownMain>
  );
};

export default DropDownMenu;
