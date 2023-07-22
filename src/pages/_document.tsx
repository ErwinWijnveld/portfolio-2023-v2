import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWX54TC" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}
				></noscript>
			</body>
		</Html>
	);
}
