import ContentImageRight from '@/components/ContentImageRight';
import FAQ from '@/components/FAQ';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import RightPinkGradient from '@/components/RightPinkGradient';
import { blogs, blogsMeta, reversedBlogs } from '@/data/blogs';
import { GetStaticPaths, GetStaticProps } from 'next';

const Blog = ({ page }: any) => {
	// get last 3 blogs ids
	const blogids = reversedBlogs
		?.filter((blog: any) => blog?.id !== page?.id)
		?.slice(0, 3)
		.map((blog: any) => blog.id);
	return (
		<Layout
			meta={{
				...page?.meta,
				seo_image:
					'https://erwinwijnveld.nl' + page?.thumbnail?.image?.src,
			}}
		>
			<ContentImageRight
				breadcrumbs={[
					{
						title: 'Blog',
						href: '/' + blogsMeta?.slug,
					},
					{ ...page?.category },
				]}
				{...page}
			/>
			<div className="relative">
				<RightPinkGradient />
			</div>
			<FeaturedBlogs ids={blogids} />
			<Newsletter />
		</Layout>
	);
};
export default Blog;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const page = blogs.find((blog) => params?.slug === blog.slug);

	return {
		props: {
			page: page,
		},
		revalidate: 5,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = blogs.map(
		(path: any) => '/' + blogsMeta?.slug + '/' + path?.slug
	);

	return {
		paths: paths,
		fallback: false,
	};
};
