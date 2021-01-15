import React, { useMemo } from 'react';
import { ColorElement, PaletteWrapper, RangeWrapper } from './palette.styled';

interface IPaletteProps {
  globalcolors: any;
  colorHandler: any;
  flag: boolean;
  //status: null | boolean;
}

const Palette = (props: IPaletteProps): JSX.Element => {
  const { globalcolors, flag, colorHandler } = props;

  const paletteHantler = (event: any) => {
    const curColor = globalcolors.find(
      (elm: any) => +event.target.id === +elm.colorId
    );
    console.dir(colorHandler);
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
