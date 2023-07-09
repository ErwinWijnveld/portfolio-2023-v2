import DoubleText from '@/components/DoubleText';
import FAQ from '@/components/FAQ';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import HeroImages from '@/components/HeroImages';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import Technologies from '@/components/Technologies';
import Timeline from '@/components/Timeline';
import { diensten, dienstenMeta } from '@/data/diensten';
import { GetStaticPaths, GetStaticProps } from 'next';

const Dienst = ({ page }: any) => {
	return (
		<Layout
			meta={{
				...page?.meta,
				seo_image:
					'https://erwinwijnveld.nl' + page?.thumbnail?.image?.src,
			}}
		>
			<HeroImages
				title={page?.title}
				description={page?.description}
				images={page?.images}
			/>
			<Timeline {...page?.timeline} />
			<div className="py-20">
				<Technologies />
			</div>
			<DoubleText {...page?.doubleText} />
			<FAQ />
			<FeaturedBlogs ids={[1, 2, 3]} />
			<Newsletter />
		</Layout>
	);
};
export default Dienst;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const page = diensten.find((dienst) => params?.slug === dienst.slug);

	return {
		props: {
			page: page,
		},
		revalidate: 5,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = diensten.map(
		(path: any) => '/' + dienstenMeta?.slug + '/' + path?.slug
	);

	return {
		paths: paths,
		fallback: false,
	};
};
