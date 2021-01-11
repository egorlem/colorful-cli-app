import React, { useRef } from 'react';
import styled from 'styled-components';
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

const TextDecoration: React.FC = (state: any) => {
  // STATE
  const {
    psOneOptions: { textdecoration, currentElement, status },
    removeElemtStyle,
    setElementStyle,
  } = state;

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
          removeElemtStyle(getStyleIndex(currentElement, regular));
        }
        break;
      case 'regular':
        if (haveStyle(currentElement, bold)) {
          removeElemtStyle(getStyleIndex(currentElement, bold));
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
        removeElemtStyle(index);
      } else if (status && !flag) {
        removeOpposite(e.style);
        setElementStyle(e);
      }
    };
    return (
      <DecorButton
        flag={status}
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
    <DecorBtnsWrapper flag={status}>{DecorationProperty}</DecorBtnsWrapper>
  );
};

export default TextDecoration;
