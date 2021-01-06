import React from 'react';
import styled from 'styled-components';

const ElmtStutusWrapper = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
`;
const CurrentColor = styled.div`
  color: ${(props) => props.color || 'black'};
  &:after {
    color: #474747;
    content: '>';
  }
`;
const CurrentDecor = styled.div`
  &:after {
    color: #474747;
    content: '>';
  }
`;
const SlectedSequnces = styled.div`
  &:after {
    color: #474747;
    content: '>';
  }
`;
let under = '⋃';

const FgColorPreview = ({ hexString }: any) => {
  return <CurrentColor color={hexString}>{'[▣]'}</CurrentColor>;
};
const BgColorPreview = ({ hexString }: any) => {
  return <CurrentColor color={hexString}>{'[▣]'}</CurrentColor>;
};

const displayDecoration = (element: any, i: any) => {
  switch (element) {
    case 'regular':
      const rgl = <span className="regular">{'r'}</span>;
      return (
        <CurrentDecor className="regular" key={`prv${i}`}>
          {'['}
          {rgl}
          {']'}
        </CurrentDecor>
      );
    case 'bold':
      const bld = <span className="bold">{'B'}</span>;
      return (
        <CurrentDecor key={`prv${i}`}>
          {'['}
          {bld}
          {']'}
        </CurrentDecor>
      );
    case 'underscore':
      const undscr = <span className="underscore">{'⋃'}</span>;
      return (
        <CurrentDecor key={`prv${i}`}>
          {'['}
          {undscr}
          {']'}
        </CurrentDecor>
      );
    case 'blink':
      const blk = <span className="blink">{'l'}</span>;
      return (
        <CurrentDecor key={`prv${i}`}>
          {'['}
          {blk}
          {']'}
        </CurrentDecor>
      );
    default:
      return;
  }
};

const DecorationPreview = ({ style }: any) => {
  const DecorPreviewLien = style.map((e: any, i: number) =>
    displayDecoration(e, i)
  );
  return <>{DecorPreviewLien}</>;
};
export const ElementStatus: React.FC = (state: any) => {
  const {
    psOneOptions: {
      currentElement: { bg, fg, sequences, style },
    },
  } = state as any;

  const bgColorStatus = bg.colorId === 'RST';
  const fgColorStatus = fg.colorId === 'RST';

  return (
    <ElmtStutusWrapper>
      <SlectedSequnces></SlectedSequnces>
      {!bgColorStatus && <BgColorPreview {...bg} />}
      {!fgColorStatus && <FgColorPreview {...fg} />}
      <DecorationPreview style={style} />
    </ElmtStutusWrapper>
  );
};
