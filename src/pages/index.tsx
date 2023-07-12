import BackgroundGradient from '@/components/BackgroundGradient';
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
		<Layout
			meta={{
				seo_title: 'Erwin Wijnveld | Freelance Designer & Developer',
				seo_description:
					'Freelance designer & developer in de regio Arnhem, Nijmegen en Elst gespecialiseerd in het ontwerpen en ontwikkelen van supermoderne websites en webapplicaties.',
			}}
		>
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
			<HeroMockup
				title='Jouw <span class="gradient-text transition-colors duration-500">droomwebsite</span> laten maken'
				description="Wil je in de regio Arnhem, Nijmegen, Elst en omstreken
						een krachtige online aanwezigheid opbouwen? Bij mij kun
						je terecht om een moderne en gebruiksvriendelijke
						website te laten bouwen die perfect aansluit bij jouw
						wensen."
				cta={{
					title: 'Bekijk projecten',
					href: '/projecten',
				}}
			>
				<BackgroundGradient
					className="absolute right-0 top-0 z-10 h-full w-full translate-x-24"
					preserveAspectRatio="xMidYMid slice"
				/>
			</HeroMockup>
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
