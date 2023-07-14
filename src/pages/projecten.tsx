import BlurCtaBanner from '@/components/BlurCtaBanner';
import CardMasonry from '@/components/CardMasonry';
import Layout from '@/components/Layout';

const Overmij = () => {
	return (
		<Layout
			meta={{
				seo_title:
					'Projecten | Erwin Wijnveld | Freelance Designer & Developer',
				seo_description:
					'Mijn projecten showcase, wil jij een website die op maat gemaakt is en perfect aansluit bij jouw wensen? Neem dan contact met mij op.',
			}}
		>
			<CardMasonry />
		</Layout>
	);
};
export default Overmij;
