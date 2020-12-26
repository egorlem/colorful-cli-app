import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getResultCodeLine } from '../../redux/codereducer';
import { CodeHeader } from './codeheader';
import { CodeArea } from './codearea';
import { CodeResultWrapper } from './code.styled';

const Result = (state: any) => {
  //STATE;
  const {
    result: { resPsOneLine },
    code: { codeline, bgVar, fgVar },
    getResultCodeLine,
  } = state;

  useEffect(() => {
    getResultCodeLine();
  }, [resPsOneLine]);

  return (
    <CodeResultWrapper>
      <CodeHeader />
      <CodeArea {...state} />
    </CodeResultWrapper>
  );
};

const mstp = (state: any) => {
  return state;
};

export default connect(mstp, { getResultCodeLine })(Result);
