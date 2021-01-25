import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import CodeHeader from './result/codeheader';
import CodeArea from './result/codearea';
import ResultLeftMenu from './leftmenu/resultmenu';

import { testFromApi } from '../state/redux/code/reducers';
import { TAppState } from '../state/store';

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

  return (
    <div className="shell-editor">
      <div className="left-area">
        <ResultLeftMenu />
      </div>
      <div className="right-area">
        <CodeHeader />
        <CodeArea />
      </div>
    </div>
  );
};
export default Result;
