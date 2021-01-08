import React, { useMemo } from 'react';
import { IPromptElem } from '../../../../types/global';
import {
  SelectWrapper,
  SelectItem,
  ItemTitele,
  ItemPreview,
} from './selectpromptel.styled';

const SelectElement: React.FC = (props) => {
  console.log('render');
  //STATE
  const {
    psOneSequences,
    status,
    resPsOneLine,
    setCurrentElement,
    changeModeStatus,
    selectedLine,
  } = props as any;

  const setId = (arr: IPromptElem[][], lineIndex: number): number => {
    return arr[lineIndex].length + 1;
  };

  const statusHandler = (e: IPromptElem) => {
    if (status === null) {
      console.log(status);
      const id = setId(resPsOneLine, selectedLine);
      setCurrentElement({ ...e, id });
      changeModeStatus('ADD');
    } else if (status === 'UPDATE') {
      setCurrentElement({ ...e });
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
  }, [psOneSequences, status]);
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
