import styled from "styled-components";
import { ISFlag } from '../../types/global';

export const PsOneControllsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 400;
  background-color: #303030;
  color: #dadada;
  padding-left: 4px;
  padding-right: 4px;
`;

export const PsOneItem = styled.div`
  transition: padding-bottom 0.1s;
  font-size: 1.4rem;
  padding-top: 6px;
  padding-bottom: ${(props: ISFlag) => (props?.flag ? "6px" : "12px")};
  //border-left: 2px solid ${(props: ISFlag) => (props?.flag ? "red" : "blue")};
  border-bottom: 1px solid #3a3a3a;
`;
