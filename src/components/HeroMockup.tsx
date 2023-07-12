'use client';

import mockup from '@/assets/images/mockup.png';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';
import { useEffect, useRef } from 'react';
import BackgroundGradient from './BackgroundGradient';
import Button from './Button';

const HeroMockup = ({ children, title, description, cta }: any) => {
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
			className="text-primary-light relative flex h-screen max-h-[1000px] min-h-[650px] items-center overflow-x-clip bg-black md:py-12"
			ref={wrapRef}
		>
			{/* bg gradient */}
			{children}

			<div className="container relative z-20 flex max-w-7xl items-center justify-between px-6">
				<div className="relative z-10 translate-y-4">
					<h1
						className="monument mb-4 max-w-3xl text-5xl uppercase xl:text-6xl"
						dangerouslySetInnerHTML={{ __html: title }}
					></h1>
					<p
						className="mb-12 max-w-2xl text-zinc-100/80"
						dangerouslySetInnerHTML={{ __html: description }}
					></p>
					{cta?.href && (
						<Button
							as={Link}
							href={cta.href}
							className="bg-primary-light text-brown-dark group flex w-max items-center !px-12 font-semibold"
						>
							{cta?.title}
							<ArrowRightCircleIcon className="ml-4 h-6 w-6 transition group-hover:translate-x-2" />
						</Button>
					)}
				</div>
				<Image
					ref={imageRef}
					className="absolute right-0 top-1/2 w-1/2 origin-right -translate-y-1/2 scale-90 "
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
				className="monument absolute bottom-0 right-0 z-30 cursor-pointer opacity-100 transition duration-700 ease-out hover:scale-125 hover:opacity-100"
			>
				<svg
					width="200"
					height="200"
					className="animate-spin-slower cursor-pointer "
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
							fontSize: '0.63rem',
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
