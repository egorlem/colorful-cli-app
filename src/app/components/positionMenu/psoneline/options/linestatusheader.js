import React from "react";
import styled from "styled-components";
import { ElementStatus } from "./elemstatus";
import { LineButton } from "../../../global/buttons/basebnt";

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
  color: ${(props) => (props.flag ? "#e9e9e9" : "#474747")};
  font-size: 1.2rem;
  font-weight: 300;
  &:after {
    content: "::";
    color: ${(props) => (props.flag ? "#474747" : "#474747")};
    padding: 0 4px;
  }
`;

export const LineStatusHeader = (state) => {
  const {
    psOneOptions: { status },
    addNewLine,
  } = state;

  return (
    <LineHeaderWrapper>
      <CurrentElementPreviewWrapper>
        <CELPTitle flag={status}>Slected element</CELPTitle>
        {status && <ElementStatus {...state} />}
      </CurrentElementPreviewWrapper>
      <LineButton
        flag={status}
        onClick={() => {
          if (!status) addNewLine();
        }}
      >
        Add new line
      </LineButton>
    </LineHeaderWrapper>
  );
};
