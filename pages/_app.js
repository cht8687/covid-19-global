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
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
            <title>
              COVID-19 Prediction, Dashboard, Coronavirus Dashboard, COVID19
              Charts, COVID19 Numbers
            </title>
            <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta
              name="description"
              content="covid-19 predict, covid-19 prediction, projection, trend, covid19 dashboard, tracking daily increases, historical charts"
            />
            <meta
              name="keywords"
              content="ncov2019, ncov2019 live, covid-19 predict, prediction,  projection, trend, tracker, world, covid-19 USA, covid-19 UK, covid-19 Italy, covid-19 Europe, covid-19 charts, covid-19 trends, statistics, data"
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
