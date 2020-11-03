import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '@/plugins/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }

              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
