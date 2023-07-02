import mockup from '@/assets/images/mockup.png';
import { blogs, blogsMeta } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
const posts = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		category: { title: 'Marketing', href: '#' },
		author: {
			name: 'Michael Foster',
			role: 'Co-Founder / CTO',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	// More posts...
];

export default function FeaturedBlogs({ ids }: { ids: number[] }) {
	const posts = ids.map((id) => blogs[id - 1]);
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="inline bg-gradient-to-r from-[#FF29A8] to-[#FFBB00] bg-clip-text text-lg font-semibold text-transparent">
						Blog
					</p>
					<h2 className="mt-2 ">Uitgelichte blogartikelen</h2>
					<p className="mt-2 text-lg leading-8 text-zinc-100/80">
						Op mijn blog schrijf ik over de nieuwste technologieën,
						frameworks en tools die ik gebruik. Ook schrijf ik over
						mijn ervaringen met het opzetten van een eigen bedrijf.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post, index) => {
						const dateTime = new Date(post?.date).toISOString();
						const date = new Date(post?.date).toLocaleDateString(
							'nl-NL',
							{
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							}
						);

						return (
							<Link
								href={blogsMeta?.slug + '/' + post?.slug}
								key={index}
								className="flex flex-col items-start"
							>
								<div className="relative w-full">
									<Image
										src={post?.thumbnail?.image || mockup}
										alt=""
										className={
											'aspect-[16/9] w-full rounded-2xl bg-zinc-600/50 object-cover backdrop-blur-xl sm:aspect-[2/1] lg:aspect-[3/2] ' +
											(post?.thumbnail?.image
												? ''
												: 'object-contain')
										}
									/>
									<div className="absolute inset-0 rounded-2xl" />
								</div>
								<div className="max-w-xl">
									<div className="mt-8 flex items-center gap-x-4 text-xs">
										<time
											dateTime={dateTime}
											className="text-zinc-100/80"
										>
											{date}
										</time>
										<span className="relative z-10 rounded-full bg-zinc-800 px-3 py-1.5 font-medium text-zinc-100">
											{post?.category?.title}
										</span>
									</div>
									<div className="group relative">
										<h3 className="mt-3 text-lg font-semibold leading-6">
											<a href={post?.href}>
												<span className="absolute inset-0" />
												{post.title}
											</a>
										</h3>
										<p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-100/80">
											{post?.description}
										</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
