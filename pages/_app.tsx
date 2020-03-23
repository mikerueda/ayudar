import App from 'next/app'
import MetaHead from '../components/MetaHead'

const WebApp = ({ Component, pageProps, queryParams }) => {
  return (
    <>
      <MetaHead />
      <Component {...pageProps} queryParams={queryParams} />
    </>
  )
}

WebApp.getInitialProps = async appContext => {
  const { query } = appContext.ctx
  let pageProps = await App.getInitialProps(appContext)
  return { ...pageProps, queryParams: query }
}

export default WebApp
