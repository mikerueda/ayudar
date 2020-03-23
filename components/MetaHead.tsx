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
          --color-secondary-100: #f6dadf;
          --color-secondary-200: #e5bace;
          --color-primary-900: #ff4653;
          --color-primary-950: #ef0d50;
          --color-secondary-900: #e1f2f7;
          --color-secondary-950: #4b9fe1;
        }
      `}
    </style>
  </Head>
)
