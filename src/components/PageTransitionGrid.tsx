'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Expo, Power3, gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TransitionGradientElement from './TransitionGradientElement';

const PageTransitionGrid = ({ children }: any) => {
	const pathName = usePathname();
	const [firstUpdate, setfirstUpdate] = useState(true);
	const transElRef = useRef(null) as any;

	const transitionDuration = 1.5;

	useEffect(() => {
		if (firstUpdate) {
			setfirstUpdate(false);
			return;
		}

		const itemCount =
			document.querySelectorAll('#transel .bar').length / 10;

		// exit animation
		gsap.fromTo(
			'#transel .bar',
			{
				height: '0',
			},
			{
				height: '100%',
				duration: transitionDuration - itemCount,
				ease: Power3.easeInOut,
				stagger: 0.1,
				onComplete: () => {
					window.scrollTo(0, 0);
					// add items-end to transElRef
					transElRef.current.classList.add('items-end');
				},
			}
		);
	}, [pathName]);

	const handleExitComplete = () => {
		const itemCount =
			document.querySelectorAll('#transel .bar').length / 10;

		// enter animation
		gsap.fromTo(
			'#transel .bar',
			{
				height: '100%',
			},
			{
				height: '0',
				duration: transitionDuration - itemCount,
				stagger: {
					each: 0.1,
				},
				ease: Power3.easeOut,
				onComplete: () => {
					// remove items-end from transElRef
					transElRef.current.classList.remove('items-end');
				},
			}
		);
	};

	return (
		<>
			<div
				id="transel"
				ref={transElRef}
				className="pointer-events-none fixed inset-y-0 z-[1000000] grid h-screen w-screen grid-cols-3 lg:grid-cols-5"
			>
				<div className="bar h-0 w-full bg-stone-950" />
				<div className="bar h-0 w-full bg-stone-950" />
				<div className="bar h-0 w-full bg-stone-950" />
				<div className="bar hidden h-0 w-full bg-stone-950 lg:block" />
				<div className="bar hidden h-0 w-full bg-stone-950 lg:block" />
			</div>
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

export default PageTransitionGrid;
