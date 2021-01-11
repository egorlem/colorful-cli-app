import React from 'react';
import {
  InLinePromptElement,
  ElementContainer,
  InLineDivider,
  InLineControll,
  MoveBackControll,
  MoveForwardControll,
  InLineText,
} from './line.styled';
import {
  elementHighLighter,
  IElmColorSyntax,
} from '../options/elemhighlighter';

const PsOneSingleLine = ({ id, state, lineindex, findCard }: any) => {
  // STATE
  const {
    psOneOptions: { status },
    result: { resPsOneLine },
    updateElement,
    changeModeStatus,
    moveElementBack,
    moveElementForward,
  } = state;

  const opacity = status ? 0.3 : 1;
  const { card, index, lineindex: selectedLineIndex } = findCard(id, lineindex);
  const lastIndex = resPsOneLine[lineindex].length - 1;

  const { text, color } = elementHighLighter(card) as Partial<IElmColorSyntax>;

  return (
    <ElementContainer>
      {index !== 0 && (
        <MoveBackControll
          flag={status}
          onClick={() => {
            if (!status) {
              let forvIndex = index - 1;
              moveElementBack({
                index: index,
                card: card,
                atIndex: forvIndex,
                lineIndex: selectedLineIndex,
              });
            }
          }}
        >
          <InLineDivider className="line__divider"> {'['} </InLineDivider>
          <InLineControll className="line__icon"> {'◀'} </InLineControll>
          <InLineDivider className="line__divider"> {']'} </InLineDivider>
        </MoveBackControll>
      )}
      <InLinePromptElement
        flag={status}
        style={{ opacity }}
        onClick={() => {
          if (!status) {
            updateElement({ curCard: card, oringIndex: index });
            changeModeStatus('UPDATE');
          }
        }}
      >
        <InLineText color={color}> {text} </InLineText>
      </InLinePromptElement>
      {lastIndex !== index && (
        <MoveForwardControll
          flag={status}
          onClick={() => {
            if (!status) {
              let toIndex = index + 1;
              moveElementForward({
                index: index,
                card: card,
                atIndex: toIndex,
                lineIndex: selectedLineIndex,
              });
            }
          }}
        >
          <InLineDivider className="line__divider"> {'['} </InLineDivider>
          <InLineControll className="line__icon"> {'▶'} </InLineControll>
          <InLineDivider className="line__divider"> {']'} </InLineDivider>
        </MoveForwardControll>
      )}
    </ElementContainer>
  );
};

export default PsOneSingleLine;
