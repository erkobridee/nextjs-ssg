import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { updateAssetsPrefix } from 'utils/path';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="version" content={process.env.VERSION} />

          <link rel="shortcut icon" href={updateAssetsPrefix('favicon.ico')} />

          <link
            rel="preconnect"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/"
            crossOrigin=""
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
