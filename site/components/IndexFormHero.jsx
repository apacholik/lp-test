import styled from 'styled-components';

export const IndexFormHero = styled.svg`
  width: 100%;

  text { 
    font-weight: 900;
    font-size: 45px;
    fill: url(#svgGradPrim);

    > .greeting {
      font-size: 3em;
    }
  }

  @media (max-width: ${({theme}) => theme.size.s}px) {
    font-size: 0.14vw;
  }
`;
