import { ISFlag } from '../../types/global';
import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  transition: 0.1s;
  font-size: 1.4rem;
  font-weight: 400;
  color: #dadada;
  background: transparent;
  //height: 22px;
  //border-radius: 4px;
`;

export const AddLineButton = styled(BaseButton)`
  border: 1px solid #3a3a3a;
  color: #87d7d7;
  padding: 6px 10px;
  border-radius: 4px;
  &:hover {
    border: 1px solid #87d7d7;
  }
`;
export const DeleteButton = styled(BaseButton)`
border-top: 1px solid #3a3a3a;
border-bottom: 1px solid #3a3a3a;
border-left: 1px solid #3a3a3a;
border-right: 1px solid transparent;
border-radius: 4px 0 0 4px;
padding: 6px 6px 6px 10px;
  color: #d75f5f;
  &:hover {
    border: 1px solid #d75f5f;
  }`;
export const ApplyButton = styled(BaseButton)`
border-top: 1px solid #3a3a3a;
border-bottom: 1px solid #3a3a3a;
border-left: 1px solid #3a3a3a;
border-right: 1px solid #3a3a3a;
border-radius: 4px 0 0 4px;
border-radius: 0 4px 4px 0;
padding: 6px 10px 6px 6px;
  color: #afd7af;
  &:hover {
    border: 1px solid #afd7af;
  }`;


export const CopyButton = styled(BaseButton)`
  border: 1px solid #3a3a3a;
  color: #87d7d7;
  padding: 6px 10px;
  border-radius: 4px;
  &:hover {
    border: 1px solid #87d7d7;
  }
`



export const LineButton = styled(BaseButton)`
  background: ${(props: ISFlag) =>
    props.flag ? "transparent" : "#005f87"}; ////TERM 24
  cursor: ${(props: ISFlag) => (props.flag ? "default" : "pointer")};
  color: ${(props: ISFlag) => (props.flag ? "#474747" : "#e9e9e9")};
  &:hover {
    background: ${(props: ISFlag) =>
    props.flag ? "transparent" : "#0087af"}; //TERM 25
    color: ${(props: ISFlag) => (props.flag ? "#474747" : "#fafafa")};
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
