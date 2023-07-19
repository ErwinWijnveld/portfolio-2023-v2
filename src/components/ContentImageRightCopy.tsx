import mockup from '@/assets/images/mockup.png';
import Link from '@/components/presets/Link';
import { blogsMeta } from '@/data/blogs';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import LeftBlueGradient from './LeftBlueGradient';

export default function ContentImageRightCopy({
	title,
	excerpt,
	category,
	content,
	id,
	thumbnail,
	breadcrumbs,
}: any) {
	return (
		<>
			<div className="relative isolate overflow-hidden px-6 pb-24 pt-40 sm:py-32 lg:overflow-x-clip lg:px-0">
				<LeftBlueGradient />
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-lg">
								<p className="inline-flex items-center bg-gradient-to-r from-[#FF29A8] to-[#FFBB00] bg-clip-text text-base font-semibold text-transparent">
									<Link
										className="line-clamp-1 shrink-0 text-inherit"
										href={breadcrumbs[0].href}
									>
										{breadcrumbs[0].title}
									</Link>
									<ArrowRightIcon className="basecolor mx-2 inline h-3 w-3" />
									<span className=" line-clamp-1">
										{breadcrumbs[1].title}
									</span>
								</p>
								<h1 className="mt-2 text-3xl tracking-tight sm:text-3xl">
									{title}
								</h1>
								<p
									className="basecolor  mt-6 text-xl leading-8"
									dangerouslySetInnerHTML={{
										__html: excerpt,
									}}
								></p>
							</div>
						</div>
					</div>
					<div className="-mt-12 sm:-ml-12 sm:p-12 lg:sticky lg:top-14 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<Image
							className={`h-[500px] w-full max-w-none overflow-hidden rounded-xl bg-zinc-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] ${
								thumbnail?.image
									? 'object-cover'
									: 'object-contain'
							}`}
							alt={thumbnail?.alt}
							src={thumbnail?.image || mockup}
							placeholder="blur"
						/>
					</div>
					<div className="[&_p]:basecolor lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 [&_p]:mb-8">
						<div className="lg:pr-4">
							<div
								className="landingcontent styled-text max-w-xl text-base leading-7 lg:max-w-lg"
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
