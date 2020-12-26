import React from 'react';
import { ColorElement, PaletteWrapper, RangeWrapper } from './palette.styled';

const Palette = ({ state, colorHandler }) => {
  // STATE
  const {
    psOneOptions: { globalcolors },
  } = state;
  const paletteHantler = (event) => {
    const curColor = globalcolors.find(
      (elm) => +event.target.id === +elm.colorId
    );
    colorHandler(curColor);
  };

  const BaseColor = [];
  const FullColor = [];
  const Grayscale = [];

  const paleteArr = globalcolors.forEach((e) => {
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
