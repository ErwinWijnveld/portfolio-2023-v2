'use client';

import mockup from '@/assets/images/mockup.png';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import BackgroundGradient from './BackgroundGradient';
import Button from './Button';

const HeroMockup = () => {
	const blurRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<any>(null);
	const wrapRef = useRef<HTMLDivElement>(null);

	// make blurref roughly follow mouse
	const handleMouseMove = (e: any) => {
		if (blurRef.current) {
			const { clientX, clientY } = e;
			const { left, top, width, height } =
				blurRef.current.getBoundingClientRect();
			const x = ((clientX - left) / width) * 100;
			const y = ((clientY - top) / height) * 100;

			gsap.to(blurRef.current, {
				duration: 0.5,
				// 3d animate to make it smoother
				// scale
				scale: 1.05,
				// translate
				x: x - 50,
				y: y - 50,
			});
		}
	};

	useEffect(() => {
		wrapRef?.current?.addEventListener('mousemove', handleMouseMove);

		return () => {
			wrapRef?.current?.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<section
			className="text-primary-light relative flex min-h-screen items-center overflow-x-clip md:py-12"
			ref={wrapRef}
		>
			<BackgroundGradient
				className="absolute right-0 top-0 -z-10 h-full w-full translate-x-24"
				preserveAspectRatio="xMidYMid slice"
			/>

			<div
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
				aria-hidden="true"
				ref={blurRef}
			>
				<div
					className="from-primary-light to-primary-dark relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-90 bg-gradient-to-tr opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
				aria-hidden="true"
			>
				<div
					className="from-primary-light to-primary-dark relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-90 bg-gradient-to-tr opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div className="container flex max-w-7xl items-center justify-between px-6">
				<div className="translate-y-4">
					<h1 className="mb-4 text-7xl xl:text-8xl">
						Laat mij je droomwebsite realiseren
					</h1>
					<p className="mb-12 text-zinc-100/80">
						Wil je in de regio Arnhem, Nijmegen, Elst en omstreken
						een krachtige online aanwezigheid opbouwen? Bij mij kun
						je terecht om een moderne en gebruiksvriendelijke
						website te laten bouwen die perfect aansluit bij jouw
						wensen.
					</p>
					<Button
						as={Link}
						href="/projecten"
						className="bg-primary-light text-brown-dark group flex w-max items-center !px-12 font-semibold"
					>
						Bekijk projecten
						<ArrowRightCircleIcon className="ml-4 h-6 w-6 transition group-hover:translate-x-2" />
					</Button>
				</div>
				<Image
					ref={imageRef}
					className="w-1/2"
					src={mockup}
					alt="mockup"
					priority
					placeholder="blur"
				/>
			</div>
			<a
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo({
						top: window.innerHeight,
						behavior: 'smooth',
					});
				}}
				className="absolute bottom-0 right-0 z-10 cursor-pointer opacity-100 transition duration-700 ease-out hover:scale-125 hover:opacity-100"
			>
				<svg
					width="200"
					height="200"
					className="animate-spin-slower cursor-pointer"
				>
					<path
						id="circlePath"
						d="M100,100 m-50,0a50,50 0 1,0 100,0a50,50 0 1,0 -100,0"
						fill="transparent"
						className=" cursor-pointer"
					/>
					<text
						fill="#ffffff"
						style={{
							// uppercase
							textTransform: 'uppercase',
							letterSpacing: '0.52em',
							// small text
							fontSize: '0.8rem',
							// mirror text
							// textAnchor: 'middle',
						}}
						className=" cursor-pointer"
					>
						<textPath href="#circlePath">
							Lees meer&nbsp;●&nbsp;Lees meer&nbsp;●&nbsp;
						</textPath>
					</text>
				</svg>
			</a>
		</section>
	);
};
export default HeroMockup;
