import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartStateProvider } from "../context/cart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartStateProvider>
      <Component {...pageProps} />
    </CartStateProvider>
  );
}
