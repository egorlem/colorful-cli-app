import React, { useMemo } from 'react';
import {
  SelectWrapper,
  SelectItem,
  ItemTitele,
  ItemPreview,
} from './selectpromptel.styled';

const SelectElement: React.FC = (props) => {
  //STATE
  const {
    psOneSequences,
    status,
    setCurrentElement,
    changeModeStatus,
  } = props as any;

  const statusHandler = (e: any) => {
    setCurrentElement({ ...e });
    if (status === null && status !== 'UDATE_CURRENT') {
      changeModeStatus('ADD_NEW');
    }
  };
  const PromptSequence = useMemo(() => {
    return psOneSequences.map((e: any) => {
      const getHighlighter = (elm: any) => {
        if (elm.text === 'Space') {
          return '#5fafd7';
        } else if (elm.text === 'Git branch') {
          return '#5fd7d7';
        } else {
          return '#87d7af';
        }
      };
      let color = getHighlighter(e);
      return (
        <SelectItem
          color={color}
          data-name={e.text}
          key={e.text}
          onClick={() => {
            statusHandler(e);
          }}
        >
          <ItemTitele>{e.text}</ItemTitele>
          <ItemPreview>{e.sequences}</ItemPreview>
        </SelectItem>
      );
    });
  }, [psOneSequences]);
  return <SelectWrapper>{PromptSequence}</SelectWrapper>;
};

function AreEqual(prevProps: any, nextProps: any): boolean {
  return (
    prevProps.psOneSequences === nextProps.psOneSequences &&
    prevProps.status === nextProps.status &&
    prevProps.setCurrentElement === nextProps.setCurrentElement &&
    prevProps.changeModeStatus === nextProps.changeModeStatus
  );
}

export default React.memo(SelectElement, AreEqual);
