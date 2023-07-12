import FullScreenGradient from '@/components/FullScreenGradient';
import HeroMockup from '@/components/HeroMockup';
import Layout from '@/components/Layout';

const Totaalpakket = () => {
	return (
		<Layout
			meta={{
				seo_title:
					'Totaalpakket, alles van je website laten ontwerpen, ontwikkelen tot optimaliseren en onderhouden',
				seo_description:
					'Wil je digitaal een sterke online aanwezigheid in de regio Arnhem, Nijmegen en Elst? Dan is het totaalpakket iets voor jou. Van ontwerp tot ontwikkeling, optimalisatie en onderhoud. Alles in één.',
			}}
		>
			<HeroMockup
				title='Het <span class="gradient-text transition-colors duration-500">complete</span> web pakket'
				description="Ontwerp, ontwikkeling, optimalisatie en onderhoud. Alles in één. Wil je een sterke online aanwezigheid in de regio Arnhem, Nijmegen en Elst? Dan kan ik jouw bedrijf zichtbaar maken op het internet."
				cta={{
					title: 'Neem contact op',
					href: '/contact',
				}}
			>
				<FullScreenGradient />
			</HeroMockup>
		</Layout>
	);
};
export default Totaalpakket;
