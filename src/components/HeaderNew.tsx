'use client';

import Link from '@/components/presets/Link';
import { blogsMeta } from '@/data/blogs';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from '@heroicons/react/20/solid';
import {
	Bars3Icon,
	PaintBrushIcon,
	PresentationChartLineIcon,
	SquaresPlusIcon,
	WrenchScrewdriverIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { useLenis } from '@studio-freight/react-lenis';
import { Fragment, useRef, useState } from 'react';
import BlurCtaBanner from './BlurCtaBanner';

const products = [
	{
		name: 'Webdesign',
		description: 'Ontwerp dat past bij jouw bedrijf.',
		href: '/diensten/webdesign',
		icon: PaintBrushIcon,
	},
	{
		name: 'Webontwikkeling',
		description: 'Ontwikkeling van een supermoderne website',
		href: '/diensten/webontwikkeling',
		icon: WrenchScrewdriverIcon,
	},
	{
		name: 'Optimalisatie',
		description: 'Optimalisatie voor snelheid/zoekmachines',
		href: '/diensten/optimalisatie',
		icon: PresentationChartLineIcon,
	},
	{
		name: 'Totaalpakket',
		description: 'Alles in één, van ontwerp tot optimalisatie',
		href: '/diensten/totaalpakket',
		icon: SquaresPlusIcon,
		featured: true,
	},
];
const callsToAction = [
	{ name: 'Bekijk projecten', href: '/projecten', icon: PlayCircleIcon },
	{ name: 'Bel direct', href: 'tel:+31615207232', icon: PhoneIcon },
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

export default function HeaderNew() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const headerRef = useRef(null) as any;
	const [overmij, setOvermij] = useState(false);

	useLenis(({ scroll }: any) => {
		// called every scroll
		if (scroll > 80) {
			headerRef?.current?.classList?.add('activeheader');
		} else {
			headerRef?.current?.classList?.remove('activeheader');
		}
	});

	return (
		<>
			<header
				ref={headerRef}
				className="text-primary-light fixed top-0 z-50 w-full transition duration-300  "
			>
				<nav
					className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<Link
							href="/"
							className="-m-1.5 flex items-center gap-3 p-1.5"
						>
							<span className="sr-only">ErwinWijnveld</span>
							<svg
								viewBox="0 0 389 287"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-auto"
							>
								<g clipPath="url(#clip0_507_8)">
									<path
										d="M186.65 128.16L220.4 185.49H366.4L385.52 151.34C385.52 151.34 392.02 142.34 385.52 128.16C385.92 128.56 313.52 7.39 313.52 7.39C313.52 7.39 308.69 -3.61 287.52 -4H71.57L0 88.71H126.87L117.11 107L75.23 107.82C75.23 107.82 59 128.56 59.37 142C59.74 155.44 74.82 176.16 74.82 176.16H127.28L137.85 194.87H11.39L81.33 286.77H282.56C282.56 286.77 305.79 286.77 319.62 265.62L344.42 224.96L177.3 224.15L130.12 141.39L176.12 60.68H270.86L308.68 127.77L186.65 128.16Z"
										fill="#ffffff"
									/>
								</g>
								<defs>
									<clipPath id="clip0_507_8">
										<rect
											width="388.39"
											height="290.75"
											fill="white"
											transform="translate(0 -4)"
										/>
									</clipPath>
								</defs>
							</svg>
							<span className="whitespace-nowrap text-lg font-semibold">
								Erwin Wijnveld
							</span>
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  "
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<Popover.Group className="relative hidden px-8 py-4 lg:flex lg:gap-x-12">
						<div className="absolute inset-0 -z-10 overflow-hidden rounded-full backdrop-blur-2xl ">
							<div className="absolute inset-0 scale-150 bg-zinc-600/30"></div>
						</div>
						<Popover className="relative -mr-4">
							<Popover.Button className="flex cursor-pointer items-center gap-x-1 text-sm font-semibold leading-6 outline-none ring-0 ">
								Diensten
								<ChevronDownIcon
									className="text-primary h-5 w-5 flex-none cursor-pointer"
									aria-hidden="true"
								/>
							</Popover.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-300"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute -left-8 top-[calc(100%_+_1rem)] z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-zinc-600/30 shadow-lg ring-1 ring-gray-900/5 backdrop-blur-2xl">
									<div className="p-4">
										{products.map((item, index) => (
											<Link
												href={item.href}
												key={index}
												className="group relative flex cursor-pointer items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-zinc-900/20"
											>
												<div
													className={
														'flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-lg  ' +
														(item?.featured
															? '  bg-gradient-to-tr from-[#00F3F9]/50 via-[#FF29A8]/50 to-[#FFBB00]/50 group-hover:from-[#00F3F9] group-hover:via-[#FF29A8] group-hover:to-[#FFBB00]'
															: '') +
														(index === 0
															? 'bg-[#FFBB00]/20 group-hover:bg-[#FFBB00]/60'
															: '') +
														(index === 1
															? 'bg-[#FF29A8]/20 group-hover:bg-[#FF29A8]/60'
															: '') +
														(index === 2
															? 'bg-[#00F3F9]/20 group-hover:bg-[#00F3F9]/60'
															: '')
													}
												>
													<item.icon
														className={'h-6 w-6 '}
														aria-hidden="true"
													/>
												</div>
												<div className="flex-auto cursor-pointer">
													<div
														className={
															'block font-semibold'
														}
													>
														{item.name}
														<span className="absolute inset-0" />
													</div>
													<p className="basecolor mt-1">
														{item.description}
													</p>
												</div>
											</Link>
										))}
									</div>
									<div className="grid grid-cols-2 divide-x divide-zinc-50/5 bg-zinc-900/50">
										{callsToAction.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												className="basecolor flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6"
											>
												<item.icon
													className="h-5 w-5 flex-none text-white"
													aria-hidden="true"
												/>
												{item.name}
											</Link>
										))}
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>

						<button
							onClick={() => setOvermij(true)}
							className="text-sm font-semibold leading-6 "
						>
							Over mij
						</button>
						<Link
							href={'/' + blogsMeta.slug}
							className="text-sm font-semibold leading-6 "
						>
							Blog
						</Link>
						<Link
							href="/contact"
							className="text-sm font-semibold leading-6 "
						>
							Neem contact op
						</Link>
					</Popover.Group>
				</nav>
				<Dialog
					as="div"
					className="relative z-[1000] lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900/60 backdrop-blur-xl sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between bg-zinc-900/60 px-6 py-6 backdrop-blur-md">
							<Link
								href="/"
								className="-m-1.5 flex items-center gap-3 p-1.5"
							>
								<span className="sr-only">ErwinWijnveld</span>
								<svg
									viewBox="0 0 389 287"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-auto"
								>
									<g clipPath="url(#clip0_507_8)">
										<path
											d="M186.65 128.16L220.4 185.49H366.4L385.52 151.34C385.52 151.34 392.02 142.34 385.52 128.16C385.92 128.56 313.52 7.39 313.52 7.39C313.52 7.39 308.69 -3.61 287.52 -4H71.57L0 88.71H126.87L117.11 107L75.23 107.82C75.23 107.82 59 128.56 59.37 142C59.74 155.44 74.82 176.16 74.82 176.16H127.28L137.85 194.87H11.39L81.33 286.77H282.56C282.56 286.77 305.79 286.77 319.62 265.62L344.42 224.96L177.3 224.15L130.12 141.39L176.12 60.68H270.86L308.68 127.77L186.65 128.16Z"
											fill="#ffffff"
										/>
									</g>
									<defs>
										<clipPath id="clip0_507_8">
											<rect
												width="388.39"
												height="290.75"
												fill="white"
												transform="translate(0 -4)"
											/>
										</clipPath>
									</defs>
								</svg>
								<span className="whitespace-nowrap text-lg font-semibold">
									Erwin Wijnveld
								</span>
							</Link>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root overflow-hidden px-6 pb-6">
							<div className="-my-6 divide-y divide-zinc-100/30">
								<div className="space-y-2 py-6">
									<Disclosure
										as="div"
										className="-mx-3 rounded-lg bg-zinc-900/10  backdrop-blur-md"
									>
										{({ open, close }) => (
											<>
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg  py-2 pl-3 pr-3.5 text-lg font-semibold  leading-7">
													Diensten
													<ChevronDownIcon
														className={classNames(
															open
																? 'rotate-180'
																: '',
															'h-5 w-5 flex-none'
														)}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{[
														...products,
														// ...callsToAction,
													].map((item) => (
														<Disclosure.Button
															key={item.name}
															as={Link}
															href={item.href}
															className="list-item translate-x-8 rounded-lg py-2 pr-3 text-base font-semibold leading-7 last-of-type:pb-4"
														>
															{item.name}
														</Disclosure.Button>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
									<button
										onClick={() => {
											setMobileMenuOpen(false);
											setOvermij(true);
										}}
										className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7"
									>
										Over mij
									</button>
									<Link
										href="/blog"
										className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7"
									>
										Blog
									</Link>
									<Link
										href="/projecten"
										className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7"
									>
										Projecten
									</Link>
								</div>
								<div className="py-6">
									<Link
										href="/contact"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7"
									>
										Neem contact op
									</Link>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>
			{overmij && <BlurCtaBanner onClose={() => setOvermij(false)} />}
		</>
	);
}
