import styled, { StyledComponent } from 'styled-components';

const SelectWrapper = styled.ul`
  width: 100%;
  background: #2b2b2b;
  visibility: ${(props: any) => (props.flag ? 'hidden' : 'visible')};
`;
const SelectItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #3a3a3a;
  padding: 6px 0 6px 2px;
  border-left: 5px solid ${(props: any) => props.color || '#5fd7d7'};
  &:first-child {
    border-top: 1px solid #3a3a3a;
  }
  &:last-child {
    margin-bottom: 10px;
  }
  &:hover {
    background: #005f5f;
    color: #fafafa;
  }
`;
const ItemTitele = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`;
const ItemPreview = styled.div`
  font-size: 1.2rem;
  padding-right: 5px;
  color: #606060;
  &:before {
    content: '|'
  }
`;

export { SelectWrapper, SelectItem, ItemTitele, ItemPreview };
