import type { AppProps } from 'next/app'
import LayoutWrapper from "../layouts/LayoutWrapper";
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper {...pageProps}>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default MyApp
