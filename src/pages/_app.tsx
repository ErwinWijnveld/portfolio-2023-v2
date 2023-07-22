import PageTransitionGradient from '@/components/PageTransitionGradient';
import PageTransitionGrid from '@/components/PageTransitionGrid';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';
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
			<Head>
				<Script id="gtm" strategy="afterInteractive">
					{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-N7KB8DVV');
					`}
				</Script>
			</Head>
			<div className={poppins.variable + ' ' + monumentextended.variable}>
				<PageTransitionGrid>
					<Component {...pageProps} />
				</PageTransitionGrid>
			</div>
		</>
	);
}
