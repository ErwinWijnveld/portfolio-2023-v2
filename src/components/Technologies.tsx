import figmaIcon from '@/assets/images/figma.png';
import laravelIcon from '@/assets/images/laravel.png';
import nodejsIcon from '@/assets/images/nodejs.png';
import reactIcon from '@/assets/images/react.png';
import strapiIcon from '@/assets/images/strapi.png';
import wordpressIcon from '@/assets/images/wordpress.png';
import Image from 'next/image';
import Link from 'next/link';

const Technologies = () => {
	return (
		<section>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<Image
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src={reactIcon}
						alt="Reactjs icoon wit"
						width={158}
						height={48}
					/>
					<Image
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src={laravelIcon}
						alt="Laravel icoon wit"
						width={158}
						height={48}
					/>
					<Image
						className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src={wordpressIcon}
						alt="Wordpress icoon wit"
						width={158}
						height={48}
					/>
					<Image
						className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
						src={figmaIcon}
						alt="Figma icoon wit"
						width={158}
						height={48}
					/>
					<Image
						className="col-span-2 col-start-2 max-h-12 w-full translate-y-2 object-contain sm:col-start-auto lg:col-span-1"
						src={strapiIcon}
						alt="Strapi icoon wit"
						width={158}
						height={48}
					/>
				</div>
				<div className="mt-16 flex justify-center">
					<div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-300">
						<div className="absolute inset-0 -z-10 overflow-hidden rounded-4xl  ">
							<div className="absolute inset-0 scale-150 bg-zinc-500/30 backdrop-blur-xl"></div>
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
		</section>
	);
};
export default Technologies;
