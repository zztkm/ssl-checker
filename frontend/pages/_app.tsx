import type { AppProps } from 'next/app'
import '../styles/index.css'
import { usePageView, GoogleAnalytics } from '../components/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
