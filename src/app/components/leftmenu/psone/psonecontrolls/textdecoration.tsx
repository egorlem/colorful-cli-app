import React from 'react';
import styled from 'styled-components';
import { ISFlag } from '../../../../types/global';

const DecorBtnsWrapper = styled.div`
  cursor: pointer;
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
  &:hover {
    color: #fafafa;
    .cb-divider {
      color: '#acb0f8';
    }
  }
`;

const CheckBox = styled.div`
  display: flex;
`;
const CbDivider = styled.div`
  color: ${(props: ISFlag) => (props.flag ? '#acb0f8' : '#474747')};
`;
const CbSymbol = styled.div`
  color: ${(props: ISFlag) => (props.flag ? '#acb0f8' : 'transparent')};
`;

const TextDecoration: React.FC = (state: any) => {
  // STATE
  const {
    psOneOptions: { textdecoration, currentElement },
    removeElemtStyle,
    setElementStyle,
  } = state;

  const DecorationProperty = textdecoration.map((e: any) => {
    const flag = currentElement.style.includes(e.style) as boolean;

    const curStyleIndex = (arr: any) => {
      let styleIndex = arr.style.indexOf(e.style);
      return styleIndex;
    };
    let index = curStyleIndex(currentElement);

    const decorationHandeler = () => {
      flag ? removeElemtStyle(index) : setElementStyle(e.style);
    };
    return (
      <DecorButton onClick={decorationHandeler} key={e.style} id={e.style}>
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

  return <DecorBtnsWrapper>{DecorationProperty}</DecorBtnsWrapper>;
};

export default TextDecoration;
