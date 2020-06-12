import App from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import GlobalStyle from '../common/GlobalStyle';

import { BodyHeader } from '../components/BodyHeader';
import { NavigationTop } from '../components/NavigationTop';
import { Footer } from '../components/Footer';

const Main = styled.main`
  margin-top: 72px;
  flex: 1 1 100%;
  padding: 8px;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <BodyHeader>
          <NavigationTop />
        </BodyHeader>
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}