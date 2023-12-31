import leftblue from '@/assets/images/gradients/leftblue.png';
import {
	PaintBrushIcon,
	PresentationChartLineIcon,
	WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
	{
		name: 'Webdesign op maat',
		description:
			'Een modern en uniek ontwerp dat past bij jouw bedrijf en doelgroep, met een focus op conversie.',
		icon: PaintBrushIcon,
	},
	{
		name: 'Webontwikkeling',
		description:
			'Ontwikkeling van een interactief en veilige website die goed werkt op zowel mobiel als desktop.',
		icon: WrenchScrewdriverIcon,
	},
	{
		name: 'Optimalisatie',
		description:
			'Optimalisatie van de website voor snelheid en zoekmachines, zodat je website goed vindbaar is.',
		icon: PresentationChartLineIcon,
	},
	// {
	// 	name: 'Advanced Security',
	// 	description:
	// 		'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	// 	icon: ShieldCheckIcon,
	// },
	// {
	// 	name: 'Powerful API',
	// 	description:
	// 		'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	// 	icon: CogIcon,
	// },
	// {
	// 	name: 'Database Backups',
	// 	description:
	// 		'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	// 	icon: ServerIcon,
	// },
];

export default function Usps() {
	return (
		<div className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
			<svg
				width="876"
				height="1502"
				viewBox="0 0 876 1502"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute left-0 top-0 -z-10 hidden h-[200%] -translate-x-1/2 -translate-y-1/3 md:block"
				preserveAspectRatio="xMidYMid meet"
			>
				<g filter="url(#filter0_f_1_3)">
					<ellipse
						cx="124.631"
						cy="716.953"
						rx="596.922"
						ry="183.92"
						transform="rotate(34.8917 124.631 716.953)"
						fill="#0A34CD"
					/>
				</g>
				<g filter="url(#filter1_f_1_3)">
					<ellipse
						cx="-308.035"
						cy="668.333"
						rx="899.829"
						ry="241.832"
						transform="rotate(28.8273 -308.035 668.333)"
						fill="#00F3F9"
					/>
				</g>
				<g filter="url(#filter2_f_1_3)">
					<ellipse
						cx="-42.1801"
						cy="709.134"
						rx="316.173"
						ry="78.6371"
						transform="rotate(5.49649 -42.1801 709.134)"
						fill="#81FFD9"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_1_3"
						x="-626.265"
						y="93.5632"
						width="1501.79"
						height="1246.78"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="125"
							result="effect1_foregroundBlur_1_3"
						/>
					</filter>
					<filter
						id="filter1_f_1_3"
						x="-1455.04"
						y="-164.613"
						width="2294.01"
						height="1665.89"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="175"
							result="effect1_foregroundBlur_1_3"
						/>
					</filter>
					<filter
						id="filter2_f_1_3"
						x="-556.992"
						y="425.182"
						width="1029.62"
						height="567.905"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="100"
							result="effect1_foregroundBlur_1_3"
						/>
					</filter>
				</defs>
			</svg>
			<Image
				src={leftblue}
				alt="webdesign, website laten maken blauwe gradient professioneel"
				className={
					'absolute left-0 -z-20 block object-cover md:hidden '
				}
			/>
			<div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
				<p className="inline bg-gradient-to-r from-[#00F3F9] via-[#FF29A8] to-[#FFBB00] bg-clip-text text-lg font-semibold text-transparent">
					Compleet op het web
				</p>
				<h2 className="mt-2 tracking-tight">
					Alles wat je nodig hebt om digitaal op te vallen
				</h2>
				<p className="basecolor mx-auto mt-5 max-w-prose md:text-xl">
					Of je nu een nieuwe website wilt laten maken of je huidige
					website wilt verbeteren, ik help je graag om jouw online
					doelen te bereiken.
				</p>
				<div className="mt-20">
					<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="pt-6 sm:last:col-span-2 lg:last:col-span-1"
							>
								<div className="relative flow-root rounded-4xl px-6 pb-8">
									<div className="absolute inset-0 -z-10 overflow-hidden rounded-4xl  ">
										<div className="absolute inset-0 scale-150 bg-zinc-600/30 backdrop-blur-xl"></div>
									</div>
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
												<feature.icon
													className="h-8 w-8 text-white"
													aria-hidden="true"
												/>
											</span>
										</div>
										<h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight">
											{feature.name}
										</h3>
										<p className="basecolor mx-auto mt-5 max-w-md text-base leading-7">
											{feature.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
