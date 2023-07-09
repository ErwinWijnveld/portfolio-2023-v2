import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Button from './Button';
import FullScreenGradient from './FullScreenGradient';

const HeroImages = (props: any) => {
	return (
		<section className="relative isolate py-24">
			<FullScreenGradient className="-z-10" />
			<div className="overflow-hidden">
				<div className="container">
					<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
							<h1 className="monument xl:text-7xl">
								{props?.title}
							</h1>
							<p className="relative mb-8 mt-6 text-lg leading-8 text-zinc-100/80 sm:max-w-md lg:max-w-none">
								{props.description}
							</p>
							<Button
								as={Link}
								href="/contact"
								className="group flex w-max items-center bg-white !px-12 font-semibold text-black"
							>
								Neem contact op
								<ArrowRightCircleIcon className="ml-4 h-6 w-6 transition group-hover:translate-x-2" />
							</Button>
						</div>
						<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
							<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
								<div className="relative">
									<img
										src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div className="relative">
									<img
										src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="relative">
									<img
										src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div className="relative">
									<img
										src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="relative">
									<img
										src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
										className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HeroImages;
