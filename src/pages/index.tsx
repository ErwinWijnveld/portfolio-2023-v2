import CenterText from '@/components/CenterText';
import FAQ from '@/components/FAQ';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import HeroMockup from '@/components/HeroMockup';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import RightPinkGradient from '@/components/RightPinkGradient';
import Steps from '@/components/Steps';
import Technologies from '@/components/Technologies';
import Testimonial from '@/components/Testimonial';
import Usps from '@/components/Usps';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['devanagari'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
	return (
		<Layout className={poppins.className}>
			<HeroMockup />
			<Usps />
			{/* <Testimonial /> */}
			<Technologies />
			<Steps />
			<FAQ />
			<FeaturedBlogs ids={[1, 2, 3]} />
			<Newsletter />
		</Layout>
	);
}
