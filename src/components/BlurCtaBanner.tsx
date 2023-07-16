import erwinguus from '@/assets/images/erwinguus.jpg';
import Link from '@/components/presets/Link';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import BackgroundGradient from './BackgroundGradient';
import BlueFullscreenGradient from './BlueFullscreenGradient';
import Button from './Button';
import FullScreenGradient from './FullScreenGradient';
import GreenFullscreenGradient from './GreenFullscreenGradient';
import PinkFullscreenGradient from './PinkFullscreenGradient';

const benefits = [
	'Innovatieve full-stack developer.',
	'Naadloze gebruikerservaringen.',
	'Supermodern ontwerp.',
	'Flexibele en schaalbare oplossingen.',
	'Volledige technische controle.',
	'Technologie en design verenigd.',
];
const BlurCtaBanner = () => {
	return (
		<div className="relative isolate py-20 md:py-10 lg:h-screen lg:min-h-[600px] lg:py-24">
			<GreenFullscreenGradient className="-z-10 opacity-50" />
			<div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto flex h-full max-w-2xl flex-col gap-8 rounded-4xl bg-white/5 p-4 px-4 ring-1 ring-slate-500/30 backdrop-blur-xl sm:p-8 sm:px-6 sm:py-6  md:gap-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-16 xl:gap-x-20 xl:px-16">
					<Image
						className="h-80 w-full flex-none rounded-2xl object-cover shadow-xl sm:h-96 lg:aspect-square lg:h-auto lg:max-w-sm"
						src={erwinguus}
						alt="Erwin met een hond"
						placeholder="blur"
						priority
					/>
					<div className="w-full flex-auto">
						<h2 className="text-primary-light text-3xl   tracking-tight sm:text-4xl">
							Erwin Wijnveld
						</h2>
						<p className="mt-6 leading-6 text-gray-300">
							Als full stack developer met een specialisatie in{' '}
							<b>modern design</b> en <b>interactiviteit</b>,
							breng ik jouw website tot leven. Met mijn creatieve
							aanpak en technische vaardigheden zorg ik voor een
							boeiende gebruikerservaring.
						</p>
						<ul
							role="list"
							className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2 text-sm leading-7 text-white sm:grid-cols-2"
						>
							{benefits.map((benefit) => (
								<li key={benefit} className="flex gap-x-3">
									<CheckCircleIcon
										className="h-6 w-4 flex-none"
										aria-hidden="true"
									/>
									{benefit}
								</li>
							))}
						</ul>
						<div className="mt-10 flex pb-6 md:pb-0">
							<Button
								as={Link}
								href="/contact"
								className="group flex w-max items-center bg-white  !px-4 font-semibold text-black lg:!px-12"
							>
								Neem contact op
								<ArrowRightCircleIcon className="ml-4 h-6 w-6 transition group-hover:translate-x-2" />
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="pointer-events-none absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
				aria-hidden="true"
			>
				<div
					className="from-primary via-brown-light/60 to-primary-light/50 aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r opacity-25"
					style={{
						clipPath:
							'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
					}}
				/>
			</div>
		</div>
	);
};
export default BlurCtaBanner;
