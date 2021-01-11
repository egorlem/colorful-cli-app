import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import { ISFlag } from './../../../types/global';


export const TopMenuContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e4e8;
  background: transparent;
`;
//#f2f2f2
export const TonMenuItem = styled.div`
  transition: border-bottom 0.2s, color 0.2s;
  font-size: 1.4rem;
  padding: 10px;
  background: ${(props: ISFlag) => (props.flag ? '#f8f8f8' : 'transparent')};
  border-bottom: ${(props: ISFlag) =>
    props.flag ? '2px solid cyan' : '2px solid transparent'};
  color: red;
  .TopMenuLink {
    color: ${(props: ISFlag) => (props.flag ? 'black' : '#e1e4e8')};
  }
  &:hover {
    border-bottom: ${(props: ISFlag) =>
    props.flag ? '2px solid cyan' : '2px solid #e1e4e8'};
    .TopMenuLink {
      color: black;
    }
  }
`;
export const TopMenuLink = styled(NavLink)`
  transition: border-bottom 0.2s, color 0.2s;
`;

