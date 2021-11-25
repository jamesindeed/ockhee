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

          <meta name="application-name" content="Ockhee" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Ockhee" />
          <meta
            name="description"
            content="Ockhee is a web development blog discussing all things programming, development, web and life. Ockhee provides high quality and easy to understand content for web developers."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#c1cbf5" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="##fff" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/letter-o152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/letter-o192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/letter-o152.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="/letter-o72.png"
          />
          <link rel="manifest" href="/manifest.json" />

          <link rel="shortcut icon" href="/letter-o72.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content="PWA App" />
          <meta
            name="twitter:description"
            content="Best PWA App in the world"
          />
          <meta
            name="twitter:image"
            content="https://yourdomain.com/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@DavidWShadow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PWA App" />
          <meta property="og:description" content="Best PWA App in the world" />
          <meta property="og:site_name" content="PWA App" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta
            property="og:image"
            content="https://yourdomain.com/icons/apple-touch-icon.png"
          />
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
