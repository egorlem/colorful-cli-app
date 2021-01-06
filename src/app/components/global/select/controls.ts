import styled from "styled-components";
import { ISFlag } from './../../../types/global';

export const ControllWrapper = styled.div`
  transition: color 0.2s;
  width: 35px;
  font-size: 1.4rem;
  text-align: center;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  cursor: pointer;
  color: ${(props: ISFlag) => (props.flag ? "#87d7d7" : "#5fd7d7")};
  &:hover {
    color: #5fd7d7;
  }
`;
const Icon = styled.div`
  font-family: "JetBrains";
  line-height: 100%;
  display: inline-block;
  transition: transform 0.2s, color 0.2s;
  transition-delay: 0.1s;
  transition-property: transform;
  background: transparent;
  min-width: 16px;
`;
export const StaticIcon = styled(Icon)`
  padding: 0 4px;
`;
export const AnimatedIcon = styled(Icon)`
  transform: ${(props: ISFlag) => (props.flag ? "rotate(270deg)" : "rotate(90deg);")};
  transform-origin: 50% 50%;
`;
export const LeftDivider = styled.div`
  font-family: "Arial";
  display: inline-block;
  transition: padding 0.1s;
  padding-right: ${(props) => (props.flag ? "0" : "4px")};
  color: ${(props: ISFlag) => (props.flag ? "#3a3a3a" : "#5fd7d7")};
`;
export const RightDivider = styled.div`
  font-family: "Arial";
  display: inline-block;
  transition: padding 0.1s;
  padding-left: ${(props: ISFlag) => (props.flag ? "0" : "4px")};
  color: ${(props: ISFlag) => (props.flag ? "#3a3a3a" : "#5fd7d7")};
`;

export const Preview = styled.div`
  display: inline-block;
  font-family: "JetBrains";
  background-color: #fafafa;
`;
