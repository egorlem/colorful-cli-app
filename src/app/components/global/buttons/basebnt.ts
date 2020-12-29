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
  height: 22px;
`;
export const LineButton = styled(BaseButton)`
  background: ${(props: any) =>
    props.flag ? "transparent" : "#005f87"}; ////TERM 24
  cursor: ${(props: any) => (props.flag ? "default" : "pointer")};
  color: ${(props: any) => (props.flag ? "#474747" : "#e9e9e9")};
  &:hover {
    background: ${(props: any) =>
    props.flag ? "transparent" : "#0087af"}; //TERM 25
    color: ${(props: any) => (props.flag ? "#474747" : "#fafafa")};
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
  background: #005f87; ////TERM 24
  &:hover {
    color: #fafafa;
    background: #0087af; //TERM 31
  }
`;
