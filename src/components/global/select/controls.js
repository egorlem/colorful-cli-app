import styled from "styled-components";
export const ControllWrapper = styled.div`
  width: 35px;
  font-size: 12px;
  text-align: center;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
export const Icon = styled.div`
  font-family: "JetBrains";
  line-height: 100%;
  display: inline-block;
  transform: ${(props) => (props.open ? "rotate(270deg)" : "rotate(90deg);")};
  transform-origin: 50% 50%;
  transition: transform 0.2s, color 0.2s;
  transition-delay: 0.1s;
`;
export const LeftDivider = styled.div`
  font-family: "Arial";
  display: inline-block;
  transition: padding 0.1s;
  padding-right: ${(props) => (props.open ? "0" : "4px")};
`;
export const RightDivider = styled.div`
  font-family: "Arial";
  display: inline-block;
  transition: padding 0.1s;
  padding-left: ${(props) => (props.open ? "0" : "4px")};
`;
