import styled from "styled-components"

interface IFlag {
  flag: boolean
}
const SelectedLineWrapper = styled.div`
  display: flex;
  color: ${(props: IFlag) => (props.flag ? "#e9e9e9" : "#474747")};
  border-bottom: 1px solid #3a3a3a;
  padding: 4px 0;
`;
const AllLines = styled.div`
  //border-left: 1px solid #474747;
  //padding-left: 4px;
`;
const LineNumber = styled.div`
  font-size: 1.4rem;
  max-height: 20px;
  line-height: calc(2rem - 1px);
  white-space: nowrap;
  cursor: pointer;
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
  /* padding-left: 10px;
  border-left: 5px solid ${(props: IFlag) => (props.flag ? "#1e5751" : "#474747")};
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px; */
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