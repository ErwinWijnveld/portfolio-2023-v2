import BlurCtaBanner from '@/components/BlurCtaBanner';
import ContactInfo from '@/components/ContactInfo';
import Layout from '@/components/Layout';

const Overmij = () => {
	return (
		<Layout
			meta={{
				seo_title:
					'Contact | Erwin Wijnveld | Freelance Designer & Developer',
				seo_description:
					'Neem contact met mij op en laat een moderne website maken in de regio Arnhem, Nijmegen en Elst. Ik ben een ervaren freelance webdesigner & developer, bij mij kun je terecht om een moderne en gebruiksvriendelijke website te laten maken die perfect aansluit bij jouw wensen.',
			}}
		>
			<ContactInfo />
		</Layout>
	);
};
export default Overmij;
