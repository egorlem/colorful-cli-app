import styled from 'styled-components';

const ResultCode = styled.div`
  font-size: 1.4rem;
  min-height: 100vh;
  background: #1b1b1b;
  padding: 6px;
  padding-top: 24px;
  line-height: 120%;
  border: 1px solid #1f1f1f;
`
const CodeSection = styled.div`
  display: flex;
`
const CodeLine = styled.div`
  color: #606060;
  flex-basis: 5%;
  text-align: right;
  padding-right: 15px;
  margin-right: 10px;
  border-right: 1px solid #474747;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`
const CodeColumn = styled.div`
  flex-basis: 95%;
`

export { ResultCode, CodeSection, CodeLine, CodeColumn }