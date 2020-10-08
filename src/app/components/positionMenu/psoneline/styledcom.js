import styled from "styled-components";

export const PromptLineNumber = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  padding: 4px 0 4px 4px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-top: 1px solid black;
  border-bottom: 4px double black;
`;
export const ElementContainer = styled.div`
  display: flex;
  align-items: center;
  /* background: gray; */
  /* padding: 5px; */
  /* border-radius: 4px;
  border: 1px solid #e1e4e8; */
  padding-bottom: 4px;
  margin-bottom: 4px;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid red;
  }
`;
export const InLinePromptElement = styled.div`
  cursor: ${(props) => (props.flag ? "default" : "move")};
  font-weight: 400;
  font-size: 1.3rem;
  word-spacing: -0.2rem;
  line-height: 0.97;
  background-color: transparent;
`;
export const MoveControll = styled.div`
  cursor: ${(props) => (props.flag ? "default" : "pointer")};
  font-weight: 400;
  font-size: 1.3rem;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  color: black;
  &:hover {
    color: ${(props) => (props.flag ? "#e1e4e8" : "black")};
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
