import { Children } from 'react';
import styled from 'styled-components';
import { lighten, em } from 'polished';
import { StyledLink } from './Link';

const FooterLink = styled(StyledLink)`
  color: ${({theme}) => lighten(0.2, theme.colors.normal)};
`;

const FooterColumnTitle = styled.header`
  font-size: 1.1em;
  line-height: 1.5;
  font-weight: 600;
`;

const FooterColumn = styled(({title, children, ...restProps}) => 
  <section {...restProps}>
    {!!title && <FooterColumnTitle>{title}</FooterColumnTitle>}
    {
      Children.count(children) < 2
      ? children
      : (<ul>
        {children.map(child => <li>{child}</li>)}
      </ul>)
    }
  </section>
)`
  padding: 8px;
  font-size: 0.8em;
  max-width: 192px;
  width: 100%;

  > ul {
    margin: 0px;
    padding: 0px 4px;
    line-height: 1.4;

    list-style: none;
  }
`;

const FooterWraper = styled.footer`
  background-color: ${({theme}) => theme.footer.backgroundColor};
  padding: 8px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Copyright = styled.div`
  font-size: 0.7em;
  text-align: center;
  color: ${({theme}) => lighten(0.4, theme.colors.normal)};
  flex-basis: 100%;
  padding: 4px;
  margin-top: 8px;
`;

export const Footer = () => (
  <FooterWraper>
    <FooterColumn title="Site map">
      <FooterLink href="/">Home</FooterLink>
      <FooterLink href="/about">About</FooterLink>
    </FooterColumn>
    <Copyright>
      Copyright 2020 Andrzej Pacholik
    </Copyright>
  </FooterWraper>
);