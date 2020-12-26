import styled from 'styled-components';

const SelectWrapper = styled.ul`
  width: 100%;
  background: #252526;
  visibility: ${(props) => (props.flag ? 'hidden' : 'visible')};
`;
const SelectItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #474747;
  padding: 6px 0 6px 2px;
  border-left: 5px solid ${(props) => props.color || '#6ebb70'};
  &:first-child {
    border-top: 1px solid #474747;
  }
  &:last-child {
    margin-bottom: 10px;
  }
  &:hover {
    background: #55555d;
    color: #fafafa;
  }
`;
const ItemTitele = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`;
const ItemPreview = styled.div`
  font-size: 1.2rem;
  padding-right: 10px;
  &:before {
    content: '|'
  }
`;

export { SelectWrapper, SelectItem, ItemTitele, ItemPreview };
