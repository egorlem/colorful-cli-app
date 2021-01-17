import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import PsOneEditor from '../components/psoneeditor';

const EditorPage = () => {
  useEffect(() => {
    document.title = 'Colorful CLI / PS1';
  }, []);
  //const state = useSelector((state) => state);

  return (
    <>
      <PsOneEditor />
    </>
  );
};
export default EditorPage;
