import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/letter-o.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/letter-o192.png" />
          <meta name="theme-color" content="#f8f9fb" />
          <meta name="apple-mobile-web-app-status-bar" content="#f8f9fb" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
