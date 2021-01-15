import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { appConditionActions } from '../../../../state/redux/condition';
import { styleActions } from '../../../../state/redux/style';
import { IPromptElem } from '../../../../types/global';
import {
  SelectWrapper,
  SelectItem,
  ItemTitele,
  ItemPreview,
} from './selectpromptel.styled';

interface ISequnsecListProps {
  psOneSequences: any[];
  status: null | string;
  psonemodel: IPromptElem[][];
  selectedLine: number;
}

const SequencesList = (props: ISequnsecListProps): JSX.Element => {
  const { psOneSequences, status, psonemodel, selectedLine } = props;

  const setId = (arr: IPromptElem[][], lineIndex: number): number => {
    return arr[lineIndex].length + 1;
  };
  const dispatch = useDispatch();

  const statusHandler = (e: IPromptElem) => {
    if (status === null) {
      console.log(status);
      const id = setId(psonemodel, selectedLine);
      dispatch(styleActions.setCurrentElement({ ...e, id }));
      dispatch(appConditionActions.changeModeStatus('ADD'));
    } else if (status === 'UPDATE') {
      dispatch(styleActions.setCurrentElement({ ...e }));
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
    prevProps.status === nextProps.status
  );
}

export default React.memo(SequencesList, AreEqual);
