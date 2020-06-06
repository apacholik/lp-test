import styled from 'styled-components';
import { StyledLink } from '../StyledLink';
import ClientOnlyPortal from '../ClientOnlyPortal';

const Menu = styled.ul`
  margin: 8px 4px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.li`
  & + li {
    margin-left: 8px;
  }
`;

export function NavigationTop({}) {
  return (
    <ClientOnlyPortal selector="#__nav">
      <Menu>
        <MenuItem><StyledLink passHref href="/">Home</StyledLink></MenuItem>
        <MenuItem><StyledLink passHref href="/about">About</StyledLink></MenuItem>
      </Menu>
    </ClientOnlyPortal>
  )
}