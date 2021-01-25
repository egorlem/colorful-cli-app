import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import { ISFlag } from './../../../types/global';


export const TopMenuContainer = styled.div`
  cursor: pointer;
  display: flex;
  //border-bottom: 1px solid #3a3a3a;
  border-right: 1px solid #3a3a3a;
  border-left: 1px solid #3a3a3a;

  background: transparent;
  color: #dadada;
`;
export const TonMenuItem = styled.div`
  transition: border-bottom 0.2s, color 0.2s;
  font-size: 1.4rem;
  padding: 15px 10px 10px 10px;
  background: ${(props: ISFlag) => (props.flag ? '#2b2b2b' : 'transparent')};
  border-bottom: ${(props: ISFlag) =>
    props.flag ? '2px solid #87d7d7' : '2px solid transparent'};
  .TopMenuLink {
    color: ${(props: ISFlag) => (props.flag ? '#dadada' : '#606060')};
  }
  &:hover {
    border-bottom: ${(props: ISFlag) =>
    props.flag ? '2px solid #87d7d7' : '2px solid #dadada'};
    .TopMenuLink {
      color: #dadada;
    }
  }
`;
export const TopMenuLink = styled(NavLink)`
  transition: border-bottom 0.2s, color 0.2s;
`;

