import React from 'react';
import {
  SelectWrapper,
  SelectItem,
  ItemTitele,
  ItemPreview,
} from './selectpromptel.styled';

const SelectElement: React.FC = (state: any) => {
  //STATE
  const {
    psOneOptions: { psOneSequences, status },
    setCurrentElement,
    changeModeStatus,
  } = state as any;

  const statusHandler = (e: any) => {
    if (e.text === 'Space') {
      setCurrentElement({ ...e, type: 'SPACE' });
    } else if (e.text === 'Git branch') {
      setCurrentElement({ ...e, type: 'FUNCTION' });
    } else {
      setCurrentElement({ ...e, type: 'SEQUENCES' });
    }
    if (status === null && status !== 'UDATE_CURRENT') {
      changeModeStatus('ADD_NEW');
    }
  };

  const PromptSequence = psOneSequences.map((e: any) => {
    const getHighlighter = (elm: any) => {
      if (elm.text === 'Space') {
        return '#0d74db';
      } else if (elm.text === 'Git branch') {
        return '#2dafaa';
      } else {
        return '#2d5f5d';
      }
    };
    let color = getHighlighter(e);
    return (
      <SelectItem
        color={color}
        selected={e.selected}
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
  return <SelectWrapper>{PromptSequence}</SelectWrapper>;
};

export default SelectElement;
