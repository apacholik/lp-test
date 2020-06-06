import styled from 'styled-components';
import { StyledLink } from './Link';
import { Menu, MenuItem } from './Menu';

const NavigationTopWrapper = styled.nav`
  margin: 8px 4px;
`;

export function NavigationTop({}) {
  return (
    <NavigationTopWrapper>
      <Menu>
        <MenuItem><StyledLink passHref href="/">Home</StyledLink></MenuItem>
        <MenuItem><StyledLink passHref href="/about">About</StyledLink></MenuItem>
      </Menu>
    </NavigationTopWrapper>
  )
}