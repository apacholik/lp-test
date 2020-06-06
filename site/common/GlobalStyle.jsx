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

    display: flex;
    flex-flow: column;

    height: 100%;
    
    * {
      box-sizing: border-box;
    }

    #__next {
      display: flex;
      flex: 1 1 100%;
      margin-top: 57.6px;

      > main {
        flex: 1 1 100%;
      }
    }
  }

  #__nav {
    z-index: 8000;
    position: absolute;
    left: 0px;
    top: 0px;
  }

  #__footer {
    background-color: ${({theme}) => theme.footer.backgroundColor};
    padding: 8px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export default GlobalStyle;