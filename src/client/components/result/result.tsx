import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import { getResultCodeLine } from '../../redux/codereducer';
import { CodeHeader } from './codeheader';
import { CodeArea } from './codearea';
import { CodeResultWrapper } from './code.styled';
import { useLocation } from 'react-router-dom';
//import { getResult } from '../../redux/resultreducer';

const Result: React.FC = (state: any) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery().get('shell');
  //console.log(query);

  //STATE;
  // const {
  //   result: { resPsOneLine },
  //   code: { codeline, bgVar, fgVasr },
  //   getResultCodeLine,
  //   getResult,
  // } = state;

  // useEffect(() => {
  //   getResultCodeLine();
  // }, [resPsOneLine]);

  // useEffect(() => {
  //   getResult();
  // }, []);

  return (
    <CodeResultWrapper>
      и это ресулт
      {/* <CodeHeader />
      <CodeArea {...state} /> */}
    </CodeResultWrapper>
  );
};

// const mstp = (state: any) => {
//   return state;
// };

export default Result;
