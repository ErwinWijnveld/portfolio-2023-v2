import basheuting from '@/assets/images/webdesign/basheuting.png';
import kbschuytgraaf from '@/assets/images/webdesign/kbschuytgraaf.png';
import vayu from '@/assets/images/webdesign/vayu.png';
import watch from '@/assets/images/webdesign/watch.png';

import fitnesstracker from '@/assets/images/webontwikkeling/fitnesstracker.png';
import rebase from '@/assets/images/webontwikkeling/rebase.png';
import strivesports from '@/assets/images/webontwikkeling/strivesports.png';
import vayushop from '@/assets/images/webontwikkeling/vayushop.png';
import warmonthaal from '@/assets/images/webontwikkeling/warmonthaal.png';

export const projecten = [
	{
		id: 1,
		title: 'Sportswatch',
		href: null,
		label: 'Webdesign',
		description:
			'Een dropshipping webshop template voor een bedrijf wat sporthorloges verkoopt.',
		thumbnail: { image: watch, alt: 'Webshop for sportswatches' },
	},

	{
		id: 3,
		title: 'Bas heuting',
		href: null,
		label: 'Webdesign & development',
		description:
			'Een website voor een onafhankelijke marketeer die zijn diensten wilt aanbieden.',
		thumbnail: {
			image: basheuting,
			alt: 'website voor een onafhankelijke marketeer',
		},
	},
	{
		id: 5,
		title: 'Vayu Shop',
		href: 'https://vayu-shop.com/',
		label: 'Webdesign & development',
		description:
			'Een webshop voor een kledingmerk die hun producten wilt verkopen.',
		thumbnail: {
			image: vayushop,
			alt: 'webshop voor een kledingmerk',
		},
	},
	{
		id: 2,
		title: 'Vayu Sales',
		href: null,
		label: 'Webdesign',
		description:
			'Een landingpagina voor een kledingmerk die een bepaalde streetware sale heeft.',
		thumbnail: { image: vayu, alt: 'webshop kledingmerk' },
	},
	{
		id: 6,
		title: 'Rebase',
		href: 'https://rebase.team/',
		label: 'Webdesign & development',
		description:
			'Een website voor een development agency die hun diensten wilt aanbieden.',
		thumbnail: {
			image: rebase,
			alt: 'website voor een development agency',
		},
	},
	{
		id: 7,
		title: 'Warmonthaal',
		href: null,
		label: 'Webdesign & development',
		description: 'Een website voor een dagbesteding voor ouderen.',
		thumbnail: {
			image: warmonthaal,
			alt: 'website voor een dagbesteding voor ouderen',
		},
	},

	{
		id: 9,
		title: 'KBSchuytgraaf',
		href: null,
		label: 'Webdesign & development',
		description: 'Een website voor een kickboksschool.',
		thumbnail: {
			image: kbschuytgraaf,
			alt: 'website voor een kickboksschool',
		},
	},
	{
		id: 8,
		title: 'Strive Sports',
		href: 'https://strivesports.nl/',
		label: 'Webdesign & development',
		description: 'Een website voor een personal trainer.',
		thumbnail: {
			image: strivesports,
			alt: 'website voor een sportvereniging',
		},
	},
	{
		id: 4,
		title: 'The Fitnesstracker',
		href: 'https://fitnesstracker-app.com/',
		label: 'Webdevelopment',
		description:
			'Een website voor een fitness app die je helpt met het bijhouden van je progressie.',
		thumbnail: {
			image: fitnesstracker,
			alt: 'website voor een fitness app',
		},
	},
];
export const reversedProjecten = [...projecten].reverse();
