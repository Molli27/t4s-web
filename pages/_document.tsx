import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de"> {/* Set the language to German */}
      <Head>
        {/* Load Sansation Font from CDN */}
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sansation" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
