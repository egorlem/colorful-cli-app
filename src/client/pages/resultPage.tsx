import React, { useEffect } from 'react';
import Result from '../components/result';

export const ResultPage = () => {
  useEffect(() => {
    document.title = 'Colorful CLI / Result';
  }, []);

  return (
    <div className="shell-editor">        
      <Result />
    </div>
  );
};
