import Head from 'next/head';

const Meta = (props: any) => {
	return (
		<Head>
			<title>{props?.seo_title}</title>
			{props?.seo_description && (
				<meta name="description" content={props.seo_description} />
			)}

			{/* seo */}
			{props?.seo_title && (
				<meta property="og:title" content={props.seo_title} />
			)}

			{props?.seo_description && (
				<meta
					property="og:description"
					content={props.seo_description}
				/>
			)}

			{props?.seo_image && (
				<meta property="og:image" content={props.seo_image} />
			)}

			{props?.seo_image && (
				<meta property="twitter:image" content={props.seo_image} />
			)}

			{props?.seo_image && (
				<meta property="twitter:card" content="summary_large_image" />
			)}

			{props?.seo_title && (
				<meta property="twitter:title" content={props.seo_title} />
			)}

			{props?.seo_description && (
				<meta
					property="twitter:description"
					content={props.seo_description}
				/>
			)}
		</Head>
	);
};
export default Meta;
