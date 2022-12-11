import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {CartStateProvider} from '../context/cart'
import {UserStateProvider } from "../context/user"

export default function App({ Component, pageProps }: AppProps) {
  return(
  <CartStateProvider>
    <UserStateProvider>
    <Component {...pageProps} />
    </UserStateProvider>
  </CartStateProvider>)
}
