import { ISFlag } from '../../../../types/global';
import styled from 'styled-components';

export const ElementContainer = styled.div`
  display: flex;
  &:after {
    content: '>';
    color: #606060;
    padding: 0px 2px;
    line-height: inherit;
  }
  &:last-child {
    &:after {
      content: '';
    }
  }
`;
export const InLinePromptElement = styled.div`
  cursor: ${(props: ISFlag) => (props.flag ? 'default' : 'pointer')};
  font-weight: 400;
  font-size: 1.4rem;
  background-color: transparent;
  padding: 0 4px;
  &:hover {
    background: #2b2b2b;
  }
`;
export const InLineText = styled.p`
  color: ${(props) => props.color || '#dadada'};
  line-height: inherit;
`;






export const MoveControll = styled.div`
  cursor: ${(props: ISFlag) => (props.flag ? 'default' : 'pointer')};
  font-weight: 400;
  font-size: 1.4rem;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  color: black;
  &:hover {
    color: ${(props: ISFlag) => (props.flag ? '#e1e4e8' : '#e9e9e9')};
    .line__divider {
      color: #acb0f8;
    }
    .line__icon {
      color: #acb0f8;
    }
  }
`;




