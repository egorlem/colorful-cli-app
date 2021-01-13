import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { styleActions } from '../../../../state/redux/style';

import { TAppState } from '../../../../state/store';
import { IPromptElem, ISFlag } from '../../../../types/global';

const DecorBtnsWrapper = styled.div`
  cursor: ${(props: ISFlag) => (props.flag ? 'pointer' : 'default')};
  display: flex;
  justify-content: space-between;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  padding-top: 6px;
`;

const DecorButton = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props: ISFlag) => (props.flag ? '#dadada' : '#606060')};
  &:hover {
    color: ${(props: ISFlag) => (props.flag ? '#fafafa' : 'none')};
    .cb-divider {
      color: '#87d7d7';
    }
  }
`;

const CheckBox = styled.div`
  display: flex;
`;
const CbDivider = styled.div`
  color: ${(props: ISFlag) => (props.flag ? '#87d7d7' : '#3a3a3a')};
`;
const CbSymbol = styled.div`
  color: ${(props: ISFlag) => (props.flag ? '#87d7d7' : 'transparent')};
`;

interface IThisStatePart {
  textdecoration: any[];
  currentElement: IPromptElem;
  status: string | null;
}

const TextDecoration: React.FC = () => {
  const dispatch = useDispatch();
  const {
    textdecoration,
    currentElement,
    status,
  }: IThisStatePart = useSelector((state: TAppState) => {
    return {
      textdecoration: state.style.psoneelement.textdecoration,
      currentElement: state.style.psoneelement.currentElement,
      status: state.condition.appcondition.status,
    };
  });

  const haveStyle = (curelem: IPromptElem, styleelem: any): boolean => {
    return curelem.style.some((e: any) => e.style === styleelem.style);
  };

  const getStyleIndex = (arr: any, elem: any) => {
    let styleIndex = arr.style.findIndex((e: any) => {
      return e.style === elem.style;
    });
    return styleIndex;
  };

  const removeOpposite = (stylename: string): void => {
    const [regular, bold] = textdecoration;
    switch (stylename) {
      case 'bold':
        if (haveStyle(currentElement, regular)) {
          dispatch(
            styleActions.removeElemtStyle(
              getStyleIndex(currentElement, regular)
            )
          );
        }
        break;
      case 'regular':
        if (haveStyle(currentElement, bold)) {
          dispatch(
            styleActions.removeElemtStyle(getStyleIndex(currentElement, bold))
          );
        }
        break;
      default:
        break;
    }
  };
  const DecorationProperty = textdecoration.map((e: any) => {
    const flag = haveStyle(currentElement, e);
    const decorationHandeler = (): void => {
      if (status && flag) {
        let index = getStyleIndex(currentElement, e);
        dispatch(styleActions.removeElemtStyle(index));
      } else if (status && !flag) {
        removeOpposite(e.style);
        dispatch(styleActions.setElementStyle(e));
      }
    };
    return (
      <DecorButton
        flag={!!status}
        onClick={decorationHandeler}
        key={e.style}
        id={e.style}
      >
        <CheckBox className="cb-divider">
          <CbDivider className="cb-divider" flag={flag}>
            {'['}
          </CbDivider>
          <CbSymbol flag={flag}>{'⋁'}</CbSymbol>
          <CbDivider className="cb-divider" flag={flag}>
            {']'}
          </CbDivider>
        </CheckBox>
        {e.style}
      </DecorButton>
    );
  });

  return (
    <DecorBtnsWrapper flag={!!status}>{DecorationProperty}</DecorBtnsWrapper>
  );
};

export default TextDecoration;
