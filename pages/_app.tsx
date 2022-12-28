import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartStateProvider } from '../context/cart';
import { SessionProvider } from 'next-auth/react';
import axios from 'axios';

export default function App({ Component, pageProps }: AppProps) {
	axios.defaults.baseURL = process.env.AXIOS_BASEURL;
	return (
		<SessionProvider session={pageProps.session}>
			<CartStateProvider>
				<Component {...pageProps} />
			</CartStateProvider>
		</SessionProvider>
	);
}
