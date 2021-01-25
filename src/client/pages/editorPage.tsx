import React, { useEffect } from 'react';
import PsOneEditor from '../components/psoneeditor';

const EditorPage = () => {
  useEffect(() => {
    document.title = 'Colorful CLI / PS1';
  }, []);


  return (
    <>
      <PsOneEditor />
    </>
  );
};
export default EditorPage;
