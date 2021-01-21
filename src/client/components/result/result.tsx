import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { getResultCodeLine } from '../../redux/codereducer';
import { CodeHeader } from './codeheader';
import { CodeArea } from './codearea';
import { CodeResultWrapper } from './code.styled';
import { useLocation } from 'react-router-dom';
import { testFromApi } from '../../state/redux/code/reducers';
import { TAppState } from '../../state/store';
//import { getResult } from '../../redux/resultreducer';

const Result: React.FC = () => {
  const dispatch = useDispatch();

  const { psonemodel } = useSelector((state: TAppState) => {
    return { psonemodel: state.crud.psonecrud.psonemodel };
  });

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery().get('shell');

  useEffect(() => {
    dispatch(testFromApi(psonemodel));
  }, []);
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
      {/* <CodeHeader />*/}
      <CodeArea />
    </CodeResultWrapper>
  );
};

// const mstp = (state: any) => {
//   return state;
// };

export default Result;
