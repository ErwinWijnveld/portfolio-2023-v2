'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Expo, gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';
import TransitionGradientElement from './TransitionGradientElement';

const PageTransition = ({ children }: any) => {
	const pathName = usePathname();
	const [firstUpdate, setfirstUpdate] = useState(true);

	const transitionDuration = 0.5;

	useLayoutEffect(() => {
		if (firstUpdate) {
			setfirstUpdate(false);
			return;
		}

		// exit animation
		gsap.fromTo(
			'#trans-gradient',
			{
				x: '-100%',
			},
			{
				x: '-33.3333%',
				duration: transitionDuration,
				ease: 'linear',
				onComplete: () => {
					window.scrollTo(0, 0);
				},
			}
		);
	}, [pathName]);

	const handleExitComplete = () => {
		// enter animation
		gsap.fromTo(
			'#trans-gradient',
			{
				x: '-33.3333%',
			},
			{
				x: '40%',
				duration: transitionDuration,
				ease: 'linear',
			}
		);
	};

	return (
		<>
			<TransitionGradientElement className="fixed inset-y-0 z-[1000000] h-screen w-[1200vw] -translate-x-[1200vw] md:w-[300vw] md:-translate-x-[300vw]" />
			<AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
				<motion.div
					key={pathName}
					transition={{
						duration: transitionDuration,
					}}
					exit={{
						x: 0,
					}}
					initial="initial"
					animate="animate"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default PageTransition;
