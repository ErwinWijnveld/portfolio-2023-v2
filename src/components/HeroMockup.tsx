'use client';

import mockup from '@/assets/images/mockup.png';
import Link from '@/components/presets/Link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import Image from 'next/image';
import { title } from 'process';
import { useEffect, useRef } from 'react';
import BackgroundGradient from './BackgroundGradient';
import Button from './Button';
import RotatingReadMore from './RotatingReadMore';

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
			className="text-primary-light relative flex h-screen max-h-[900px] min-h-[700px] items-end overflow-hidden bg-black md:py-12 lg:min-h-[650px] lg:items-center"
			ref={wrapRef}
		>
			{/* bg gradient */}
			{children}

			<div className="container relative z-20 flex max-w-7xl items-center justify-between px-6">
				<div className="relative z-10 pb-28 lg:translate-y-4 lg:pb-0">
					<h1
						className="monument mb-4 max-w-3xl text-[8vw] uppercase leading-[1.1] md:text-5xl  xl:text-6xl"
						dangerouslySetInnerHTML={{ __html: title }}
					></h1>
					<p
						className="basecolor mb-12 max-w-2xl"
						dangerouslySetInnerHTML={{ __html: description }}
					></p>
					{cta?.href && (
						<Button
							as={Link}
							href={cta.href}
							className="bg-primary-light text-brown-dark group flex w-max items-center !px-4 font-semibold lg:!px-12"
						>
							{cta?.title}
							<ArrowRightCircleIcon className="ml-4 h-6 w-6 transition group-hover:translate-x-2" />
						</Button>
					)}
				</div>
				<Image
					ref={imageRef}
					className="absolute right-0 top-1/2 hidden w-1/2 origin-right -translate-y-1/2 scale-90 lg:block "
					src={mockup}
					alt="mockup"
					priority
					placeholder="blur"
				/>
			</div>
			<RotatingReadMore className="absolute bottom-0 right-0 z-30 hidden md:bottom-0 md:block" />
		</section>
	);
};
export default HeroMockup;
