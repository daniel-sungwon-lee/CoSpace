/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>CoSpace</title>
        <meta name="title" property="og:title" content="CoSpace" />
        <meta name="description" property="og:description" content="Management app" />
        <meta name="image" property="og:image" content="/images/cospace.png" />
        <link rel="icon" href="/images/cospace.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
