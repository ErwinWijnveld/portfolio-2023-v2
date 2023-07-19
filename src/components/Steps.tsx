import prestaties from '@/assets/images/prestaties.png';
import {
	CodeBracketIcon,
	PaintBrushIcon,
	PhotoIcon,
	RocketLaunchIcon,
	UserGroupIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import RightPinkGradient from './RightPinkGradient';

const features = [
	{
		name: 'Afstemmen en onderzoek.',
		description:
			'Ik verdiep mij en de niche van jouw bedrijf, bekijk hoe de concurrenten het aanpakken en zoek verbeterpunten.',
		icon: UserGroupIcon,
	},
	{
		name: 'Webdesign en Gebruikerservaring.',
		description:
			'Maak een supermodern ontwerp dat perfect aansluit bij jouw bedrijf en de gebruikerservaring.',
		icon: PaintBrushIcon,
	},
	{
		name: 'Website ontwikkeling.',
		description:
			'Transformeer het goedgekeurde ontwerp naar een functionele website met behulp van geschikte programmeertalen en technologieën.',
		icon: CodeBracketIcon,
	},
	{
		name: 'Contentcreatie en Integratie.',
		description:
			'Ontwikkel overtuigende inhoud, inclusief tekst, afbeeldingen en multimedia, en integreer deze naadloos in de website.',
		icon: PhotoIcon,
	},
	{
		name: 'Testen en Lancering.',
		description:
			'Voer grondige tests uit om de functionaliteit, compatibiliteit en responsiviteit van de website te waarborgen, en lanceer deze vervolgens naar het publiek.',
		icon: RocketLaunchIcon,
	},
];

export default function Steps() {
	return (
		<div className="relative py-24 md:py-32">
			<RightPinkGradient className="!top-auto -bottom-1/2" />

			<div className="md:container">
				<div className="relative isolate overflow-hidden  bg-zinc-900 px-6 py-12 sm:rounded-3xl sm:px-10 sm:py-24 md:py-20 lg:py-24 xl:px-24">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
						<div className="-order-2 lg:row-start-2 lg:max-w-md">
							<h2>
								Mijn stappen tot
								<br />
								een perfecte website.
							</h2>
							{/* <p className="mt-6 text-lg leading-8 text-gray-300">
								Ac euismod vel sit maecenas id pellentesque eu
								sed consectetur. Malesuada adipiscing sagittis
								vel nulla. Ac euismod vel sit maecenas.
							</p> */}
						</div>
						<div className="relative -z-20 w-full  lg:row-span-4">
							<Image
								src={prestaties}
								alt="Product screenshot"
								className="w-full  overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 "
								// width={2432}
								// height={1442}
								placeholder="blur"
							/>
							<div className="relative mx-auto mt-2 w-max rounded-full px-4 py-1 text-sm leading-6 text-gray-300 sm:py-1.5">
								<div className="absolute inset-0 -z-10 overflow-hidden rounded-4xl  ">
									<div className="absolute inset-0 scale-150 bg-zinc-500/80 blur-3xl"></div>
								</div>
								<span className="basecolor inline text-[10px] sm:text-base">
									Website prestatie analyse van{' '}
									<strong>lighthouse</strong>
								</span>
							</div>
						</div>
						<div className="-order-1 max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
							<dl className="max-w-xl space-y-8 text-sm leading-7 text-gray-300 md:text-base lg:max-w-none">
								{features.map((feature, index) => (
									<div key={index} className="relative">
										<dt className="ml-9 inline-block font-semibold text-white">
											<feature.icon
												className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
												aria-hidden="true"
											/>
											{feature.name}
										</dt>{' '}
										<dd>{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
