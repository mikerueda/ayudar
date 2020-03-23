import Head from 'next/head'

export default () => (
  <Head>
    <title>Ayudar</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.iunigo.com/atomic-uikit/latest/index.css"
    />
    <style jsx={true}>
      {`
        :root {
          --color-primary-50: #f3f4fb;
          --color-primary-100: #e8e9f8;
          --color-primary-200: #d1d4f2;
          --color-primary-400: #a4a8e4;
          --color-primary-600: #767dd7;
          --color-primary-800: #4951c9;
          --color-primary-900: #1b26bc;
          --color-primary-950: #131b8a;
          --color-secondary-50: #fff8f9;
          --color-secondary-100: #fff2f2;
          --color-secondary-200: #ffe5e6;
          --color-secondary-400: #ffcbcd;
          --color-secondary-600: #ff989b;
          --color-secondary-800: #ff989b;
          --color-secondary-900: #ff7e82;
          --color-secondary-950: #c96467;
        }
      `}
    </style>
  </Head>
)
