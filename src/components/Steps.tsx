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
import Link from 'next/link';
import RightPinkGradient from './RightPinkGradient';

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
		<div className="relative py-24 md:py-32">
			<RightPinkGradient />

			<div className="container">
				<div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
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
							/>
							<div className="relative mx-auto mt-2 w-max rounded-full px-4 py-1.5 text-sm leading-6 text-gray-300">
								<div className="absolute inset-0 -z-10 overflow-hidden rounded-4xl  ">
									<div className="absolute inset-0 scale-150 bg-zinc-500/80 blur-3xl"></div>
								</div>
								<span className="inline text-zinc-100/80">
									Website prestatie analyse van{' '}
									<strong>lighthouse</strong>
								</span>
							</div>
						</div>
						<div className="-order-1 max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
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
										<dd>{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					<svg
						width="1440"
						height="900"
						viewBox="0 0 1440 900"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute bottom-0 left-0 -z-10"
						preserveAspectRatio="XmidYmid slice"
					>
						<g clip-path="url(#clip0_311_2)">
							<g filter="url(#filter0_f_311_2)">
								<path
									d="M481.735 793.422C-36.8318 505.427 -560.419 -39.649 -771.639 -64.5961C-1149.81 -109.262 -1094.51 924.109 -694.564 1293.39C-319.272 1639.91 2285.77 1994.66 1646.51 1293.39C1306.41 920.304 923.061 1038.52 481.735 793.422Z"
									fill="#280075"
								/>
							</g>
							<g filter="url(#filter1_f_311_2)">
								<path
									d="M254.735 933.422C-263.832 645.427 -787.419 100.351 -998.639 75.4039C-1376.81 30.738 -1321.51 1064.11 -921.564 1433.39C-546.272 1779.91 2058.77 2134.66 1419.51 1433.39C1079.41 1060.3 696.061 1178.52 254.735 933.422Z"
									fill="#CF00A3"
								/>
							</g>
							<g filter="url(#filter2_f_311_2)">
								<path
									d="M456.679 1458.99C571.672 1336.28 -126.019 536.94 -570.828 240.128C-1015.64 -56.6838 -980.783 642.317 -606.306 997.912C-294.619 1293.88 341.687 1581.71 456.679 1458.99Z"
									fill="#FF8993"
									fill-opacity="0.4"
								/>
								<path
									d="M456.679 1458.99C571.672 1336.28 -126.019 536.94 -570.828 240.128C-1015.64 -56.6838 -980.783 642.317 -606.306 997.912C-294.619 1293.88 341.687 1581.71 456.679 1458.99Z"
									stroke="#FF1D74"
									stroke-width="40"
								/>
							</g>
						</g>
						<defs>
							<filter
								id="filter0_f_311_2"
								x="-1277"
								y="-316"
								width="3274"
								height="2263"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="125"
									result="effect1_foregroundBlur_311_2"
								/>
							</filter>
							<filter
								id="filter1_f_311_2"
								x="-1554"
								y="-226"
								width="3374"
								height="2363"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="150"
									result="effect1_foregroundBlur_311_2"
								/>
							</filter>
							<filter
								id="filter2_f_311_2"
								x="-1065.8"
								y="-1.54102"
								width="1705.08"
								height="1659.56"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="75"
									result="effect1_foregroundBlur_311_2"
								/>
							</filter>
							<clipPath id="clip0_311_2">
								<rect width="1440" height="900" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}
