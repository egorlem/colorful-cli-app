import React from "react";
import styled from "styled-components";

const SymbolListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-left: 5px solid #f1f1f1;
`;
const SymbolWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  margin: 1px;
`;
const Character = styled.div`
  font-size: 2.4rem;
`;
const UniCode = styled.div`
  font-size: 1rem;
`;

export const SymbolList = (state) => {
  const {
    psOneOptions: { symbols },
  } = state;

  console.log(symbols);
  const Symbols = symbols.map((e) => {
    return (
      <SymbolWrapper key={`UnicodSymbols${e.code}`}>
        <Character>{e.sybmol}</Character>
        <UniCode>{e.code}</UniCode>
      </SymbolWrapper>
    );
  });

  return <SymbolListWrapper>{Symbols}</SymbolListWrapper>;
};
