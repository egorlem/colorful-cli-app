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
  const empty = useSelector(codeSelectors.getEmptyLines);

  const EmptyLines = () => {
    if (empty > 1) {
      return (
        <>
          {new Array(empty).fill('~').map((e, i) => {
            return (
              <CodeSection key={i}>
                <CodeLine>{e}</CodeLine>
                <CodeColumn></CodeColumn>
              </CodeSection>
            );
          })}
        </>
      );
    }
    return <></>;
  };

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
      <EmptyLines />
    </ResultCode>
  );
};

export default CodeArea;
