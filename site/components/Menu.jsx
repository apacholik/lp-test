import styled from 'styled-components';

export const Menu = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const MenuItem = styled.li`
  & + li {
    margin-left: 8px;
  }
`;