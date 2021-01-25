import React from 'react';
import { useSelector } from 'react-redux';
import {
  ResultCode,
  CodeSection,
  CodeLine,
  CodeColumn,
} from './codearea.styled';

import { codeSelectors } from '../../state/redux/code/';

const CodeArea: React.FC = () => {
  const result = useSelector(codeSelectors.getCombinedResultWithId);

  const resultDocument = result.map((e) => {
    return (
      <CodeSection key={e.id}>
        <CodeLine>{e.linenum}</CodeLine>
        <CodeColumn>{e.section}</CodeColumn>
      </CodeSection>
    );
  });

  return (
    <ResultCode>
      {resultDocument}
      <CodeSection>
        <CodeLine>~</CodeLine>
        <CodeColumn></CodeColumn>
      </CodeSection>
    </ResultCode>
  );
};

export default CodeArea;
