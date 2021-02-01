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
interface IStyle {
  isSelectible: boolean
  flag: boolean
}

export const InLinePromptElement = styled.div`
  //cursor: ${(props: ISFlag) => (props.flag ? 'default' : 'pointer')};
  cursor: ${(props: ISFlag) => props.isEditable ? 'pointer' : "default"};
  font-weight: 400;
  font-size: 1.4rem;
  opacity: ${(props: ISFlag) => props.isEditMode ? '0.3' : "1.0"};
  background-color: transparent;
  padding: 0 4px;
  &:hover {
    opacity: 1;
    background: ${(props: ISFlag) => props.isEditable ? '#005f5f' : "transparent"};
    //opacity: ${(props: ISFlag) => props.isEditable ? "0.3" : "1.0"};
  }
`;
export const InLineText = styled.p`
  color: ${(props) => props.color || '#dadada'};
  opacity: ${(props: ISFlag) => props.isEditable ? "1.0" : "0.3"};
  line-height: inherit;
  &:hover {
    color: ${(props: ISFlag) => props.isEditable ? '#dadada' : ""};
  }
`;






export const MoveControll = styled.div`
  cursor: ${(props: IStyle) => (props.flag ? 'default' : 'pointer')};
  font-weight: 400;
  font-size: 1.4rem;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  color: black;
  &:hover {
    color: ${(props: IStyle) => (props.flag ? '#e1e4e8' : '#e9e9e9')};
    .line__divider {
      color: #acb0f8;
    }
    .line__icon {
      color: #acb0f8;
    }
  }
`;




