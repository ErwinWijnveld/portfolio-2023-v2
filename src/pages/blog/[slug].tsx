import ContentBlog from '@/components/ContentBlog';
import FAQ from '@/components/FAQ';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import RightPinkGradient from '@/components/RightPinkGradient';
import Usps from '@/components/Usps';
import { blogs, blogsMeta } from '@/data/blogs';
import { GetStaticPaths, GetStaticProps } from 'next';

const Blog = ({ page }: any) => {
	// get last 3 blogs ids
	const blogids = blogs
		?.filter((blog) => blog?.id !== page?.id)
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
			<ContentBlog {...page} />
			<div className="relative">
				<RightPinkGradient />
			</div>
			<FeaturedBlogs ids={blogids} />
			<FAQ />
			<Usps />
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
