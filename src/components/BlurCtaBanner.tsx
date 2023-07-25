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
const BlurCtaBanner = ({ onClose }: any) => {
	return (
		<div className="fixed inset-0 isolate z-50 min-h-screen w-screen pb-8 pt-16 md:py-10 lg:py-24">
			<div
				onClick={() => onClose()}
				className="absolute inset-0 h-full w-full bg-black/60"
			/>
			<svg
				className="pointer-events-none absolute right-4 top-4 h-8 w-8 rounded-full bg-white/20 p-1 backdrop-blur md:right-6 md:top-6 md:h-12 md:w-12 md:p-2"
				viewBox="0 -0.5 25 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
					fill="#ffffff"
				/>
			</svg>
			<div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto flex h-full max-w-2xl flex-col gap-8 overflow-auto rounded-4xl bg-white/10 p-4 px-4 ring-1 ring-slate-500/30 backdrop-blur-xl sm:p-8 sm:px-6 sm:py-6  md:gap-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-16 xl:gap-x-20 xl:px-16">
					<Image
						className="aspect-square w-full flex-none rounded-2xl object-cover shadow-xl sm:h-96 lg:aspect-square lg:h-auto lg:max-w-sm"
						src={erwinguus}
						alt="Erwin met een hond"
						placeholder="blur"
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
