import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { getResultCodeLine } from '../../redux/codereducer';
import { CodeHeader } from './result/codeheader';
import { CodeArea } from './result/codearea';
import { CodeResultWrapper } from './result/code.styled';
import { useLocation } from 'react-router-dom';
import { testFromApi } from '../state/redux/code/reducers';
import { TAppState } from '../state/store';
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
    <div className="shell-editor">
      <div className="left-area">левое меню</div>
      <div className="right-area">
        <CodeHeader />
        <CodeArea />
      </div>
    </div>
  );
};

// const mstp = (state: any) => {
//   return state;
// };

export default Result;
