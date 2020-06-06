import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import GlobalStyle from '../common/GlobalStyle';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}