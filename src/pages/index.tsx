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

export default function Home() {
	return (
		<Layout>
			<script
				type="module"
				src="https://unpkg.com/@splinetool/viewer@0.9.381/build/spline-viewer.js"
			></script>
			<div className="nospline pointer-events-none fixed inset-0 -z-10 h-screen w-screen">
				<spline-viewer
					class="h-screen w-screen"
					url="https://prod.spline.design/tFwGilj7o1vRHEUS/scene.splinecode"
				></spline-viewer>
			</div>
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
