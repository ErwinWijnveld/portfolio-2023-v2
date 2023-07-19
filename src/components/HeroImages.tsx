import Link from '@/components/presets/Link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';
import FullScreenGradient from './FullScreenGradient';
import ImageModal from './ImageModal';

const HeroImages = (props: any) => {
	const [openedImage, setOpenedImage] = useState<null | number>(null);

	return (
		<>
			{openedImage !== null && (
				<ImageModal
					setOpenedImage={(value: any) => setOpenedImage(value)}
					image={props?.images[openedImage]}
				/>
			)}
			<section className="relative isolate py-24">
				<FullScreenGradient className="-z-10" />
				<div className="overflow-hidden">
					<div className="container pt-24 md:pt-40 lg:pt-0">
						<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
							<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h1 className="monument text-xl xs:text-2xl md:text-4xl xl:text-7xl">
									{props?.title}
								</h1>
								<p className="basecolor relative mb-8 mt-4 text-base sm:max-w-md md:text-lg lg:mt-6 lg:max-w-none">
									{props.description}
								</p>
								<Button
									as={Link}
									href="/contact"
									className="group flex w-max items-center bg-white !px-4 font-semibold text-black lg:!px-12"
								>
									Neem contact op
									<ArrowRightCircleIcon className="ml-4 h-6 w-6 transition group-hover:translate-x-2" />
								</Button>
							</div>
							<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
								<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<div
										onClick={() => setOpenedImage(0)}
										className="relative hover:cursor-pointer"
									>
										<Image
											placeholder="blur"
											src={props?.images[0]?.image}
											alt={props?.images[0]?.alt}
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover object-top shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
									<div
										onClick={() => setOpenedImage(1)}
										className="relative hover:cursor-pointer"
									>
										<Image
											placeholder="blur"
											src={props?.images[1]?.image}
											alt={props?.images[1]?.alt}
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover object-top shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div
										onClick={() => setOpenedImage(2)}
										className="relative hover:cursor-pointer"
									>
										<Image
											placeholder="blur"
											src={props?.images[2]?.image}
											alt={props?.images[2]?.alt}
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover object-top shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
									<div
										onClick={() => setOpenedImage(3)}
										className="relative hover:cursor-pointer"
									>
										<Image
											placeholder="blur"
											src={props?.images[3]?.image}
											alt={props?.images[3]?.alt}
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover object-top shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div
										onClick={() => setOpenedImage(4)}
										className="relative hover:cursor-pointer"
									>
										<Image
											placeholder="blur"
											src={props?.images[4]?.image}
											alt={props?.images[4]?.alt}
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover object-top shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default HeroImages;
