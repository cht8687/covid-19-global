import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

import {GA_TRACKING_ID} from '../lib/gtag';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            data-ad-client="ca-pub-8555230138177286"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script
            data-ad-client="pub-8555230138177286"
            async
            src="https://pagead2.googlesyndication.com/
pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
