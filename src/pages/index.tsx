import homegradient from '@/assets/images/homegradient.png';
import code from '@/assets/images/screens/Code.png';
import figma from '@/assets/images/screens/Figma.png';
import optimization from '@/assets/images/screens/optimization.png';
import BackgroundGradient from '@/components/BackgroundGradient';
import BackgroundGradientMobile from '@/components/BackgroundGradientMobile';
import FAQ from '@/components/FAQ';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import HeroMockup from '@/components/HeroMockup';
import ImageTextBackdrop from '@/components/ImageTextBackdrop';
import Layout from '@/components/Layout';
import Newsletter from '@/components/Newsletter';
import RotatingReadMore from '@/components/RotatingReadMore';
import Technologies from '@/components/Technologies';
import Usps from '@/components/Usps';
import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
	return (
		<Layout
			meta={{
				seo_title: 'Erwin Wijnveld | Freelance Designer & Developer',
				seo_description:
					'Freelance designer & developer in de regio Arnhem, Nijmegen en Elst. Wil jij een supermoderne website laten maken om online op te vallen? Dan ben je aan het juiste adres.',
			}}
		>
			<Script
				id="spline"
				strategy="afterInteractive"
				type="module"
				src="https://unpkg.com/@splinetool/viewer@0.9.381/build/spline-viewer.js"
			></Script>
			<div className="nospline pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
				{/* @ts-ignore */}
				<spline-viewer
					class="h-full w-full"
					url="https://prod.spline.design/tFwGilj7o1vRHEUS/scene.splinecode"
					// @ts-ignore
				></spline-viewer>
			</div>
			<div className="relative overflow-x-clip">
				<HeroMockup
					title='Jouw <span class="gradient-text transition-colors duration-500">droomwebsite</span> laten maken'
					description="Wil je een website laten maken in de regio Arnhem, Nijmegen, Elst en omstreken om
							een krachtige online aanwezigheid op te bouwen? Ik ben een ervaren freelance webdesigner & developer, bij mij kun
							je terecht om een moderne en gebruiksvriendelijke website te laten maken die perfect aansluit bij jouw
							wensen."
					cta={{
						title: 'Bekijk projecten',
						href: '/projecten',
					}}
				>
					<BackgroundGradient
						className="absolute right-0 top-0 z-10 hidden h-full w-full translate-x-24 md:block"
						preserveAspectRatio="xMidYMid slice"
					/>
					{/* <BackgroundGradientMobile
						className="absolute right-0 top-0 z-10 h-full w-full md:hidden"
						preserveAspectRatio="xMidYMid slice"
					/> */}
					<Image
						src={homegradient}
						alt="webdesign gradient"
						className="absolute right-0 top-0 z-10 h-full w-full object-cover md:hidden"
						priority
					/>
				</HeroMockup>
				<RotatingReadMore className="absolute -bottom-20 -right-20 z-30 md:bottom-0 md:hidden" />
			</div>
			<Usps />
			{/* <Testimonial /> */}
			<Technologies />
			<div className="py-6 md:py-12"></div>
			<ImageTextBackdrop
				rtl
				image={figma}
				alt="Ontwerp gemaatk in Figma"
				title="Webdesign"
				text="Een goed ontwerp is de basis van een goede website. Het ontwerp is het eerste wat de bezoeker ziet en bepaalt of de bezoeker blijft of weggaat. Ik zorg ervoor dat het ontwerp aansluit bij jouw huisstijl en doelgroep."
				cta={{
					title: 'Lees meer',
					href: '/diensten/webdesign',
				}}
				placeholder="blur"
			/>
			<ImageTextBackdrop
				image={code}
				alt="Website maatwerk laten maken met code"
				title="Webontwikkeling"
				text="Een website is meer dan alleen een mooi ontwerp, het moet ook goed werken. Met mijn expertise in verschillende technologieën kan ik al jouw wensen realiseren. Van een simpele website tot een complexe webapplicatie."
				cta={{
					title: 'Lees meer',
					href: '/diensten/webontwikkeling',
				}}
				placeholder="blur"
			/>

			<ImageTextBackdrop
				rtl
				image={optimization}
				alt="Website optimaliseren met googla analytics en googlt tagmanager"
				title="Optimalisatie"
				text="Een website is nooit af. Door middel van data analyse kan ik de website optimaliseren. Ik kan bijvoorbeeld zien waar bezoekers afhaken en dit verbeteren. Zo zorg ik voor een constant converterende website."
				cta={{
					title: 'Lees meer',
					href: '/diensten/optimalisatie',
				}}
				placeholder="blur"
			/>
			<div className="py-6 md:py-12"></div>

			<FAQ ids={[1, 6, 3, 2, 7]} />
			<FeaturedBlogs ids={[4, 5, 7]} />
			<Newsletter />
		</Layout>
	);
}
