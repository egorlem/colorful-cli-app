import styled from "styled-components";
import { ISFlag } from './../../../types/global';

export const PsOneControllsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "JetBrains", monospace;
  font-weight: 400;
  background-color: #303030;
  top: 0;
  left: 45px;
  color: #dadada;
  padding-left: 4px;
  padding-right: 4px;
  //width: 365px;
`;
export const PsOneButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 12px;
`;

export const PsOneItem = styled.div`
  transition: padding-bottom 0.1s;
  font-size: 1.5rem;
  padding-top: 6px;
  padding-bottom: ${(props: ISFlag) => (props?.flag ? "6px" : "12px")};
  border-bottom: 1px solid #3a3a3a;
`;
