import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {StateStoreProvide} from '../context/useStateStore'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <StateStoreProvide>
    <Component {...pageProps} />
  </StateStoreProvide>)
}
