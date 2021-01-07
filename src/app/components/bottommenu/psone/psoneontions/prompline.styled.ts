import styled from "styled-components"

interface IFlag {
  flag: boolean
}

const SelectedLineWrapper = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: ${(props: IFlag) => (props.flag ? "500" : "400")};
  color: ${(props: IFlag) => (props.flag ? "#e9e9e9" : "#474747")};
`;
const SingleLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  border-left: 5px solid ${(props: IFlag) => (props.flag ? "#1e5751" : "#474747")};
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const SingleLineTitle = styled.div`
  min-height: 32px;
  border-bottom: 1px solid #474747;
  border-top: 1px solid #474747;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AllLines = styled.div`
  border-left: 1px solid #474747;
  padding-left: 4px;
`;

export { SelectedLineWrapper, SingleLine, SingleLineTitle, AllLines }