import BlurCtaBanner from '@/components/BlurCtaBanner';
import Layout from '@/components/Layout';

const Overmij = () => {
	return (
		<Layout
			meta={{
				seo_title:
					'Over mij | Erwin Wijnveld | Freelance Designer & Developer',
				seo_description:
					'Freelance designer & developer in de regio Arnhem, Nijmegen en Elst. Wil jij een supermoderne website laten maken om online op te vallen? Dan ben je aan het juiste adres.',
			}}
		>
			<BlurCtaBanner />
		</Layout>
	);
};
export default Overmij;
