import React from 'react';
import styled from 'styled-components';

/*  
  &:hover::-webkit-slider-runnable-track {
    background-color: red;
  }
  &::-ms-fill-lower {
    background-color: red;
  }
 &::-ms-fill-upper {
    background-color: red;
  }

*/

const initBgColor = '#bdbdbd';
const RangeContainer = styled.div`
  border: 1px solid #dddddd;
  height: 4rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Range = styled.input`
  -webkit-appearance: none;
  width: 80%;
  height: 100%;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #ffffff;
    margin-top: -5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    width: 60%;
    height: 9px;
    background-color: ${(props) => props.color || initBgColor};
    border-radius: 3rem;
    transition: all 0.5s;
    cursor: pointer;
  }

  &::-ms-track {
    width: 60%;
    cursor: pointer;
    height: 9px;
    transition: all 0.5s;
    /* Hides the slider so custom styles can be added */
    background-color: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #ffffff;
    margin-top: -5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  &::-ms-fill-lower {
    background-color: #bdbdbd;
    border-radius: 3rem;
  }

  &::-ms-fill-upper {
    background-color: #bdbdbd;
    border-radius: 3rem;
  }
  &::-moz-range-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #ffffff;
    margin-top: -5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    cursor: pointer;
  }
  &::-moz-range-track {
    width: 60%;
    height: 9px;
    background-color: #bdbdbd;
    border-radius: 3rem;
    transition: all 0.5s;
    cursor: pointer;
  }
  &:hover::-moz-range-track {
    background-color: red;
  }
`;

export const Input = ({ color, handler, value }: any) => {
  return (
    <RangeContainer>
      <Range
        value={value}
        color={color}
        type="range"
        min={0}
        max={255}
        onChange={(e) => {
          handler(e.target.value);
        }}
      />
    </RangeContainer>
  );
};
