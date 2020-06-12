import { Children } from 'react';
import styled from 'styled-components';
import { lighten, darken, em } from 'polished';
import { StyledLink } from './Link';

const FooterLink = styled(StyledLink)`
  color: ${({theme}) => theme.footer.link.color};

  &:hover {
    color: ${({theme}) => darken(0.2, theme.footer.link.color)};
  }
`;

const FooterColumnTitle = styled.header`
  font-size: 1em;
  line-height: 1.5;
  font-weight: 600;
`;

const FooterColumn = styled(({title, children, ...restProps}) => 
  <section {...restProps}>
    {!!title && <FooterColumnTitle>{title}</FooterColumnTitle>}
    {
      Children.count(children) < 2
      ? children
      : (<div>
        {children}
      </div>)
    }
  </section>
)`
  padding: 8px;
  font-size: 0.8em;
  max-width: 192px;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px 4px;
    line-height: 1.4;

    list-style: none;
  }
`;

const FooterWraper = styled.footer`
  background-color: ${({theme}) => theme.footer.backgroundColor};
  padding: 8px;

  > * {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    p {
      margin: 0px;
      padding: 0px;
    }

    ul {
      margin: 0px;
      margin-left: 20px;
      padding: 0px;
    }
  }
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
    <div className="max-width">
      <FooterColumn title="Site map">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about">About</FooterLink>
      </FooterColumn>
      <FooterColumn title="SVG graphic">
        <p>from <FooterLink target="_blank" href="https://www.flaticon.com/" title="Flaticon">flaticon.com</FooterLink>, made by:</p>
        <ul>
          <li>
            <FooterLink target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</FooterLink>
          </li>
          <li>
            <FooterLink target="_blank" href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</FooterLink>
          </li>
          <li>
            <FooterLink target="_blank" href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</FooterLink>
          </li>
          <li>
            <FooterLink target="_blank" href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</FooterLink>
          </li>
        </ul>
      </FooterColumn>
      <Copyright>
        Copyright 2020 Andrzej Pacholik
      </Copyright>
    </div>
  </FooterWraper>
);