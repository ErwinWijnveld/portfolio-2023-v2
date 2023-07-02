import Link from 'next/link';

const Technologies = () => {
	return (
		<div className="">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<img
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
						alt="Transistor"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
						alt="Reform"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
						alt="Tuple"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
						alt="SavvyCal"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
						alt="Statamic"
						width={158}
						height={48}
					/>
				</div>
				<div className="mt-16 flex justify-center">
					<div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-300">
						<div className="absolute inset-0 -z-10 overflow-hidden rounded-4xl  ">
							<div className="absolute inset-0 scale-150 bg-zinc-500/80 blur-3xl"></div>
						</div>
						<span className="hidden md:inline">
							Expertise in de nieuwste technologieën en frameworks
						</span>
						<Link
							href="/projecten"
							className="font-semibold text-indigo-500"
						>
							<span
								className="absolute inset-0"
								aria-hidden="true"
							/>{' '}
							Bekijk mijn projecten{' '}
							<span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Technologies;
