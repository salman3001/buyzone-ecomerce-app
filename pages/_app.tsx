import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StoreProvide } from '../context/store'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <StoreProvide>
    <Component {...pageProps} />
  </StoreProvide>)
}
