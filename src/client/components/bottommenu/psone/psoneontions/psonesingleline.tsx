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
import { useDispatch, useSelector } from 'react-redux';
import { TAppState } from '../../../../state/store';
import { crudActions } from '../../../../state/redux/crud';
import { condition } from '../../../../state/redux';
import { appConditionActions } from '../../../../state/redux/condition';
import { styleActions } from '../../../../state/redux/style';

const PsOneSingleLine = ({ id, lineindex, findCard }: any) => {
  const dispatch = useDispatch();
  const { status, psonemodel } = useSelector((state: TAppState) => {
    return {
      status: state.condition.appcondition.status,
      psonemodel: state.crud.psonecrud.psonemodel,
    };
  });

  // STATE
  // const {
  //   // psOneOptions: { status },
  //   // result: { resPsOneLine },
  //   updateElement,
  //   changeModeStatus,
  //   moveElementBack,
  //   moveElementForward,
  // } = state;

  const opacity = status ? 0.3 : 1;

  const { card, index, lineindex: selectedLineIndex } = findCard(id, lineindex);

  const lastIndex = psonemodel[lineindex].length - 1;

  const { text, color } = elementHighLighter(card) as Partial<IElmColorSyntax>;

  return (
    <ElementContainer>
      {index !== 0 && (
        <MoveBackControll
          flag={!!status}
          onClick={() => {
            // if (!status) {
            //   let forvIndex = index - 1;
            //   moveElementBack({
            //     index: index,
            //     card: card,
            //     atIndex: forvIndex,
            //     lineIndex: selectedLineIndex,
            //   });
            // }
          }}
        >
          <InLineDivider className="line__divider"> {'['} </InLineDivider>
          <InLineControll className="line__icon"> {'◀'} </InLineControll>
          <InLineDivider className="line__divider"> {']'} </InLineDivider>
        </MoveBackControll>
      )}
      <InLinePromptElement
        flag={!!status}
        style={{ opacity }}
        onClick={() => {
          if (!status) {
            dispatch(
              styleActions.updateElement({ curCard: card, oringIndex: index })
            );
            dispatch(appConditionActions.changeModeStatus('UPDATE'));
          }
        }}
      >
        <InLineText color={color}> {text} </InLineText>
      </InLinePromptElement>
      {lastIndex !== index && (
        <MoveForwardControll
          flag={!!status}
          onClick={() => {
            // if (!status) {
            //   let toIndex = index + 1;
            //   moveElementForward({
            //     index: index,
            //     card: card,
            //     atIndex: toIndex,
            //     lineIndex: selectedLineIndex,
            //   });
            // }
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
