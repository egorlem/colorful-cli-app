import React from 'react';
import { ColorElement, PaletteWrapper, RangeWrapper } from './palette.styled';

const Palette: React.FC = ({ state, colorHandler }: any) => {
  // STATE
  const {
    psOneOptions: { globalcolors },
  } = state as any;
  const paletteHantler = (event: any) => {
    const curColor = globalcolors.find(
      (elm: any) => +event.target.id === +elm.colorId
    );
    colorHandler(curColor);
  };

  const BaseColor: Array<any> = [];
  const FullColor: Array<any> = [];
  const Grayscale: Array<any> = [];

  const paleteArr = globalcolors.forEach((e: any) => {
    if (e.colorId < 16) {
      BaseColor.push(
        <ColorElement
          onClick={paletteHantler}
          id={e.colorId}
          key={e.colorId}
          color={e.hexString}
        ></ColorElement>
      );
    } else if (e.colorId > 16 && e.colorId < 233) {
      FullColor.push(
        <ColorElement
          onClick={paletteHantler}
          id={e.colorId}
          key={e.colorId}
          color={e.hexString}
        ></ColorElement>
      );
    } else {
      Grayscale.push(
        <ColorElement
          onClick={paletteHantler}
          id={e.colorId}
          key={e.colorId}
          color={e.hexString}
        ></ColorElement>
      );
    }
  });
  return (
    <PaletteWrapper>
      <RangeWrapper color={'#878ac0'}>{FullColor}</RangeWrapper>
      <RangeWrapper>{Grayscale}</RangeWrapper>
      <RangeWrapper color={'#0d74db'}>{BaseColor}</RangeWrapper>
    </PaletteWrapper>
  );
};
export default Palette;
