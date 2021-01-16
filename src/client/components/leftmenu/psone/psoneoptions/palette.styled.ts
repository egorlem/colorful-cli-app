import { ISFlag } from '../../../../types/global';
import styled from 'styled-components';

export const PaletteWrapper = styled.div`
  width: 100%;
  visibility: ${(props: ISFlag) => (props.flag ? 'hidden' : 'visible')};
`;
const ColorElement = styled.div`
  cursor: pointer;
  width: 42px;
  min-height: 25px;
  background-color: ${(props: any) => props.color || 'black'};
  border: 1px solid transparent;
  padding: 2px;
  margin: 1px;
  &:hover {
    border: 1px solid #f1f1f1;
  }
`;
const RangeWrapper = styled.div`
  margin-bottom: 6px;
  border-left: 6px solid ${(props: any) => props.color || '#f1f1f1'};
  display: flex;
  flex-wrap: wrap;
  background: transparent;
`;

export { ColorElement, RangeWrapper };
