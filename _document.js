/*
	Remember that _document is a SERVER-ONLY page. It will never execute on the client.
*/
import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import flush from 'styled-jsx/server';
import getPageContext from '../hoc/getPageContext';

const withJssProvider = (Component, pageContext, props) => (
  <JssProvider
    registry={pageContext.sheetsRegistry}
    generateClassName={pageContext.generateClassName}>
    <Component pageContext={pageContext} {...props} />
  </JssProvider>
);

class MyDocument extends Document {
  static getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. page.getInitialProps
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the server with error:
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. page.getInitialProps
    // 3. page.render

    // Get the context of the page to collected side effects.
    const pageContext = getPageContext();
    const page = ctx.renderPage(Component => props => {
      return withJssProvider(Component, pageContext, props);
    });

    return {
      ...page,
      pageContext,
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: pageContext.sheetsRegistry.toString(),
            }}
          />
          {flush() || null}
        </React.Fragment>
      ),
    };
  }

  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
