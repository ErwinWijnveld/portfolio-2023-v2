import PageTransitionGrid from '@/components/PageTransitionGrid';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

const poppins = Poppins({
	subsets: ['devanagari'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

const monumentextended = localFont({
	src: '../../public/fonts/MonumentExtended-Regular.woff2',
	variable: '--font-monumentextended',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-WV5KV2Q3Z2" />
			<Script id="google-analytics">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
		
				gtag('config', 'G-WV5KV2Q3Z2');
				`}
			</Script>
			<div className={poppins.variable + ' ' + monumentextended.variable}>
				<PageTransitionGrid>
					<Component {...pageProps} />
				</PageTransitionGrid>
			</div>
		</>
	);
}
