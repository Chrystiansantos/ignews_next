import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  // "typescript-eslint/explicit-module-boundary-types": "off"
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* importando a font */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Main sera todo o conteudo do app */}
          <Main />
          {/* Sera onde o next ira colocar os arquivos js */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
