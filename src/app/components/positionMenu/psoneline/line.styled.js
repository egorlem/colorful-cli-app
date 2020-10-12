import styled from "styled-components";

export const ElementContainer = styled.div`
  display: flex;
  align-items: center;
  /* background: gray; */
  /* padding: 5px; */
  /* border-radius: 4px;
  border: 1px solid #e1e4e8; */
  padding-bottom: 4px;
  margin-bottom: 2px;
  /* &:hover {
    border-bottom: 1px solid red;
  } */
  &:after {
    content: "⋰";
    color: #474747;
  }
  &:last-child {
    &:after {
      content: "";
    }
  }
`;
export const InLinePromptElement = styled.div`
  cursor: ${(props) => (props.flag ? "default" : "pointer")};
  font-weight: 400;
  font-size: 1.4rem;
  /* word-spacing: -0.2rem; */
  /* line-height: 0.97; */
  background-color: transparent;
  &:hover {
    color: #fafafa;
  }
`;
export const MoveControll = styled.div`
  cursor: ${(props) => (props.flag ? "default" : "pointer")};
  font-weight: 400;
  font-size: 1.4rem;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  color: black;
  &:hover {
    color: ${(props) => (props.flag ? "#e1e4e8" : "#e9e9e9")};
    .line__divider {
      color: #acb0f8;
    }
    .line__icon {
      color: #acb0f8;
    }
  }
`;
export const MoveBackControll = styled(MoveControll)`
  /* transform: rotate(180deg); */
  ::before {
    content: "";
  }
`;
export const MoveForwardControll = styled(MoveControll)`
  ::after {
    content: "";
  }
`;

export const InLineDivider = styled.span`
  color: #474747;
`;

export const InLineControll = styled.span`
  color: #8386ba;
`;
export const InLineText = styled.span`
  color: ${(props) => props.color || "#e9e9e9"};
`;
