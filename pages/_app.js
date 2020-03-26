import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {createGlobalStyle} from 'styled-components';
import {ThemeProvider} from '@material-ui/core/styles';
import {ApolloProvider} from '@apollo/react-hooks';
import withApolloClient from '../lib/withApollo';
import resets from '../styles/resets';
import theme from '../theme/theme';
import DrawerProvider from '../context/DrawerProvider';
import {DefaultSeo} from 'next-seo';
import SEO from '../next-seo.config';

function tooltip_click_event(e) {}

const GlobalStyle = createGlobalStyle`
  ${resets}; 
 `;

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const {Component, pageProps, apollo} = this.props;

    return (
      <ApolloProvider client={apollo}>
        <GlobalStyle />
        <React.Fragment>
          <Head>
            <title>COVID-19 Boards</title>
            <meta name="robots" content="index, follow" />
            <meta name="covid-19" content="covid-19 coronavirus dashboard" />
            <meta name="covid19" content="covid-19 coronavirus dashboard" />
            <meta name="coronavirus" content="covid-19 coronavirus dashboard" />
            <meta name="US covid-19" content="covid-19 coronavirus dashboard" />
            <meta name="UK covid-19" content="covid-19 coronavirus dashboard" />
            <meta
              name="Italy covid-19"
              content="covid-19 coronavirus dashboard"
            />
            <DefaultSeo {...SEO} />
          </Head>
          <ThemeProvider theme={theme}>
            <DrawerProvider>
              <Component {...pageProps} />
            </DrawerProvider>
          </ThemeProvider>
        </React.Fragment>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
