import BlogItem from '@/components/BlogItem';
import FAQ from '@/components/FAQ';
import Layout from '@/components/Layout';
import LeftBlueGradient from '@/components/LeftBlueGradient';
import Newsletter from '@/components/Newsletter';
import RightPinkGradient from '@/components/RightPinkGradient';
import Technologies from '@/components/Technologies';
import Usps from '@/components/Usps';
import { reversedBlogs } from '@/data/blogs';

const index = () => {
	return (
		<Layout
			meta={{
				seo_title:
					'Blogartikelen over webdesign, webdevelopment en optimalisatie',
				seo_description:
					'Lees hier de blogartikelen van Erwin Wijnveld over webdesign, webdevelopment en optimalisatie.',
			}}
		>
			<section className="relative overflow-hidden">
				<RightPinkGradient />
				<div className="container pb-32 pt-48">
					<div className="text-center">
						<p className="gradient-text text-lg font-semibold">
							Blog
						</p>
						<h1 className="mt-2">
							Blogartikelen over webdesign, webdevelopment en
							optimalisatie
						</h1>
					</div>
				</div>
				<div className="container">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{reversedBlogs.map((post, index) => (
							<BlogItem {...post} key={index} />
						))}
					</div>
				</div>
			</section>
			<div className="pt-40">
				<Technologies />
			</div>
			<FAQ ids={[12, 13, 14, 15]} />
			<Newsletter />
		</Layout>
	);
};
export default index;
