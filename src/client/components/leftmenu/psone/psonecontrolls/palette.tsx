import React, { useMemo } from 'react';
import { ColorElement, PaletteWrapper, RangeWrapper } from './palette.styled';

interface IPalleteProps {
  globalcolors: any;
  colorHandler: any;
  flag: boolean;
}

const Palette: React.FC = (props): JSX.Element => {
  const { globalcolors, colorHandler, flag, status } = props as any;

  const paletteHantler = (event: any) => {
    const curColor = globalcolors.find(
      (elm: any) => +event.target.id === +elm.colorId
    );
    colorHandler(curColor);
  };

  const colorslist = useMemo(() => {
    return globalcolors.map((e: any) => {
      return (
        <ColorElement
          onClick={paletteHantler}
          id={e.colorId}
          key={e.colorId}
          color={e.hexString}
        ></ColorElement>
      );
    });
  }, [globalcolors]);
  return (
    <PaletteWrapper flag={flag}>
      <RangeWrapper color={'#0d74db'}>{colorslist}</RangeWrapper>
    </PaletteWrapper>
  );
};
export default React.memo(Palette);
