import {
	BugAntIcon,
	ChatBubbleLeftRightIcon,
	ComputerDesktopIcon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
import LeftOrangeGradient from './LeftOrangeGradient';
import RightPinkGradient from './RightPinkGradient';
const cards = [
	{
		Icon: PhoneIcon,
		title: 'Offerte aanvragen',
		description:
			'Heb je interesse in mijn diensten en wil je een offerte aanvragen? Ik help je graag verder. Neem contact met me op en ik zorg ervoor dat je snel een passende offerte ontvangt.',
		cta: {
			href: 'tel:+31615207232',
			title: '<span aria-hidden="true">&rarr;</span> +31 6 15 207 232',
		},
	},

	{
		Icon: EnvelopeIcon,
		title: 'Overige vragen',
		description:
			'Heb je nog andere vragen met betrekking tot web- of softwareontwikkeling? Ik sta voor je klaar om al je vragen te beantwoorden en je te helpen bij het vinden van de beste oplossingen. Aarzel niet om contact met me op te nemen.',
		cta: {
			href: 'mailto:info@erwinwijnveld.nl',
			title: '<span aria-hidden="true">&rarr;</span> info@erwinwijnveld.nl',
		},
	},
	{
		Icon: BugAntIcon,
		title: 'Technische support',
		description:
			'Heb je technische ondersteuning nodig voor je website of software? Ik ben gespecialiseerd in het oplossen van technische problemen en sta klaar om je te helpen. Neem contact met me op en ik zorg ervoor dat je snel weer operationeel bent.',
		cta: {
			href: 'tel:+31615207232',
			title: '<span aria-hidden="true">&rarr;</span> +31 6 15 207 232',
		},
	},
];

export default function ContactInfo() {
	return (
		<div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
			<LeftOrangeGradient />
			<RightPinkGradient className="-z-10" />
			<div
				className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					className="from-brown-light to-brown relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div className="mx-auto max-w-2xl sm:text-center">
				<p className="gradient-text text-lg font-semibold">Contact</p>
				<h1 className=" text-primary-light monument mt-4 tracking-tight sm:text-5xl">
					Neem contact op
				</h1>
				<p className="text-primary-light/75  mt-6 leading-6">
					Heb je een vraag of wil je een offerte aanvragen? Neem dan
					contact met mij op via de onderstaande kanalen.
				</p>
			</div>
			<div className="mx-auto mt-20 max-w-lg space-y-16">
				{cards?.map(({ Icon, title, description, cta }, index) => (
					<div className="flex gap-x-6" key={index}>
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-400/40">
							<Icon
								className="h-6 w-6 text-white"
								aria-hidden="true"
							/>
						</div>
						<div>
							<h3 className="text-primary-light text-base font-semibold leading-7">
								{title}
							</h3>
							<p className="text-primary-light/75 mt-2 text-sm leading-7 md:text-base">
								{description}
							</p>
							<p className="mt-4">
								<a
									href={cta?.href}
									className="text-sm font-bold leading-6 "
									dangerouslySetInnerHTML={{
										__html: cta?.title,
									}}
								/>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
