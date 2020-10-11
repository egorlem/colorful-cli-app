import styled from "styled-components";

export const BaseButton = styled.button`
  transition: 0.1s;
  font-family: "JetBrains", "monospace";
  font-size: 1.2rem;
  font-weight: 400;
  padding: 2px 5px;
  border-bottom: 4px double #474747;
  margin-right: 4px;
  color: #e9e9e9;
`;

export const LineButton = styled(BaseButton)`
  cursor: ${(props) => (props.flag ? "default" : "pointer")};
  color: ${(props) => (props.flag ? "gray" : "black")};
  &:hover {
    background: ${(props) => (props.flag ? "none" : "gray")};
  }
`;

export const PsOneDeleteBtn = styled(BaseButton)`
  background: #cb97b6;
  &:hover {
    color: #fafafa;
    background: #ca96b5f2;
  }
`;
export const PsOneApplyBtn = styled(BaseButton)`
  background: #acb0f8;
  &:hover {
    color: #fafafa;
    background: #acb0f8f2;
  }
`;
