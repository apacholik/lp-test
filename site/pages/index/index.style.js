import styled from 'styled-components';


export const IndexWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  flex-grow: 1;

  > *:first-child {
    @media (max-width: ${({theme}) => theme.size.m}px) {
      margin-right: 0px;
    }

    margin-right: 8px;
  }
`;

export const IndexGraphics = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
  top: 0;
  left: 0;
  height: 350px;
  min-width: 300px;

  @media (max-width: ${({theme}) => theme.size.s}px) {
    min-width: auto;
    height: 110.79vw;
  }

  > svg {
    width: 900px;
    height: 350px;
    position: absolute;
    margin-left: -450px;
    left: 50%;
    top: 0;

    @media (max-width: ${({theme}) => theme.size.s}px) {
      width: 285.4vw;
      height: auto;
      margin-left: -142vw;
    }
  }
`;

export const IndexFormWrapper = styled.div`
  height: 100%;
  padding: 8px;
  width: 300px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IndexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-basis: 30%;

  > * {
    max-width: 250px;
    width: 100%;
  }

  > * + * {
    margin-top: 8px;
  }
`;

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
