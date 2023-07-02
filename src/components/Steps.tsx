import prestaties from '@/assets/images/prestaties.png';
import {
	CloudArrowUpIcon,
	CodeBracketIcon,
	LockClosedIcon,
	PaintBrushIcon,
	PhotoIcon,
	RocketLaunchIcon,
	ServerIcon,
	UserGroupIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
	{
		name: 'Afstemmen en onderzoek.',
		description:
			'Ik verdiep mij en de niche van jouw bedrijf, bekijk hoe de concurrenten het aanpakken en zoek verbeterpunten.',
		icon: UserGroupIcon,
	},
	{
		name: 'Ontwerp en Gebruikerservaring.',
		description:
			'Maak een supermodern webdesign dat perfect aansluit bij jouw bedrijf en de gebruikerservaring.',
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
		<div className="py-24 md:py-32">
			<div className="container">
				<div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
						<div className="lg:row-start-2 lg:max-w-md">
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
						<Image
							src={prestaties}
							alt="Product screenshot"
							className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-[48rem]"
							// width={2432}
							// height={1442}
						/>
						<div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
							<dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
								{features.map((feature, index) => (
									<div key={index} className="relative">
										<dt className="ml-9 inline-block font-semibold text-white">
											<feature.icon
												className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
												aria-hidden="true"
											/>
											{feature.name}
										</dt>{' '}
										<dd className="inline">
											{feature.description}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					<div
						className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
						aria-hidden="true"
					>
						<div
							className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#FFBB00] to-[#FF29A8] opacity-25"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
