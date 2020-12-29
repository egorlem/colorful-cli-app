import styled from "styled-components";
export const ControllWrapper = styled.div`
  transition: color 0.2s;
  width: 35px;
  font-size: 1.4rem;
  text-align: center;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  cursor: pointer;
  color: ${(props) => (props.open ? "#878ac0" : "#acb0f8")};
  &:hover {
    color: #acb0f8;
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
  transform: ${(props) => (props.open ? "rotate(270deg)" : "rotate(90deg);")};
  transform-origin: 50% 50%;
`;
export const LeftDivider = styled.div`
  font-family: "Arial";
  display: inline-block;
  transition: padding 0.1s;
  padding-right: ${(props) => (props.open ? "0" : "4px")};
  color: ${(props) => (props.open ? "#474747" : "#acb0f8")};
`;
export const RightDivider = styled.div`
  font-family: "Arial";
  display: inline-block;
  transition: padding 0.1s;
  padding-left: ${(props) => (props.open ? "0" : "4px")};
  color: ${(props) => (props.open ? "#474747" : "#acb0f8")};
`;

export const Preview = styled.div`
  display: inline-block;
  font-family: "JetBrains";
  background-color: #fafafa;
`;
