import React from 'react';
import styled from 'styled-components';

const SymbolListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-left: 5px solid #0d74db;
  visibility: ${(props: any) => (props.flag ? 'hidden' : 'visible')};
`;
const SymbolWrapper = styled.div`
  background: #37373d;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid transparent;
  margin: 1px;
  cursor: pointer;
  &:hover {
    border: 1px solid #474747;
    color: #fafafa;
    background: #55555d;
  }
`;
const Character = styled.div`
  font-weight: 300;
  font-size: 2.4rem;
  padding-top: 2px;
  padding-bottom: 2px;
`;
const UniCode = styled.div`
  font-size: 0.9rem;
  color: white;
  background: #022140;
  padding: 2px;
`;

export const SymbolList = (state: any) => {
  const {
    psOneOptions: { symbols, status },
    setCurrentElement,
    changeModeStatus,
  } = state;

  const statusHandler = (e: any) => {
    setCurrentElement({ ...e, type: 'SYMBOL' });
    if (status === null && status !== 'UDATE_CURRENT') {
      changeModeStatus('ADD_NEW');
    }
  };

  const Symbols = symbols.map((e: any) => {
    return (
      <SymbolWrapper
        onClick={() => {
          statusHandler({
            sequences: e.symbol,
            text: `Symbol ${e.symbol}`,
            code: e.symbol,
          });
        }}
        key={`UnicodSymbols${e.code}`}
      >
        <Character>{e.symbol}</Character>
        <UniCode>{e.code}</UniCode>
      </SymbolWrapper>
    );
  });

  return <SymbolListWrapper>{Symbols}</SymbolListWrapper>;
};
