import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: 'Crimson Text', serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;

    padding: 0px;
    margin: 0px;

    height: 100%;
    
    * {
      box-sizing: border-box;
    }

    #__next {
      display: flex;
      min-height: 100%;
      flex: 0 1 100%;

      display: flex;
      flex-flow: column;
    }

    .max-width {
      max-width: 1160px;
      width: 100%;
      margin: 0px auto;
    }
  }
`

export default GlobalStyle;