import styled from 'styled-components';
import { StyledLink } from './Link';
import { Menu, MenuItem } from './Menu';

const NavigationTopWrapper = styled.nav`
  margin: 8px 4px;
  * {
    color: ${({theme}) => theme.nav.link.color};
    font-weight: 600;
    font-size: 1.1em;
  }
`;

export function NavigationTop({}) {
  return (
    <NavigationTopWrapper className="max-width">
      <Menu>
        <MenuItem key="home"><StyledLink passHref href="/">Home</StyledLink></MenuItem>
        <MenuItem key="about"><StyledLink passHref href="/about">About</StyledLink></MenuItem>
      </Menu>
    </NavigationTopWrapper>
  )
}