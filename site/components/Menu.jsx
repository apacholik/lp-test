import styled from 'styled-components';

export const Menu = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuItem = styled.li`
  & + li {
    margin-left: 8px;
    &:before {
      content: '|';
      margin: 0em 0.5em;
      font-size: 1.2em
    }
  }
`;