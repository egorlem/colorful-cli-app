import styled from "styled-components"

const AllLines = styled.div`
  border: 1px solid #3a3a3a;
  padding: 4px 8px 4px 8px;
  background: #303030;
`;

interface IFlag {
  flag?: boolean
  isSelectible?: boolean
}
const SelectedLineWrapper = styled.div`
  display: flex;
  color: ${(props: IFlag) => (props.flag ? "#e9e9e9" : "#474747")};
  border-bottom: 1px solid #3a3a3a;
  padding: 4px 0;
`;

const LineNumber = styled.div`
  font-size: 1.4rem;
  max-height: 20px;
  line-height: calc(2rem - 1px);
  cursor: ${(props: IFlag) => (props.isSelectible ? "pointer" : "default")};
  //cursor: pointer;
  &::after {
    content: ":";
    padding: 0px 4px;
    color: #606060;
  }
`
const SingleLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: calc(2rem - 1px);
  border-left: 1px solid #3a3a3a;
`;
const SingleLineTitle = styled.div`
  min-height: 32px;
  border-bottom: 1px solid #474747;
  border-top: 1px solid #474747;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { SelectedLineWrapper, SingleLine, SingleLineTitle, AllLines, LineNumber }