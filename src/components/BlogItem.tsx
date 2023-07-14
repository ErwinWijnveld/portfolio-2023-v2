import mockup from '@/assets/images/mockup.png';
import { blogsMeta } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';

const BlogItem = (post: any) => {
	const dateTime = new Date(post?.date).toISOString();
	const date = new Date(post?.date).toLocaleDateString('nl-NL', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<Link
			data-id={post?.id}
			href={'/' + blogsMeta?.slug + '/' + post?.slug}
		>
			<article className="flex cursor-pointer flex-col items-start">
				<div className="relative w-full">
					<Image
						src={post?.thumbnail?.image || mockup}
						alt={post?.thumbnail?.image || 'blogafbeelding'}
						className={
							'aspect-[16/9] w-full rounded-2xl bg-zinc-600/50 object-cover backdrop-blur-xl sm:aspect-[2/1] lg:aspect-[3/2] ' +
							(post?.thumbnail?.image ? '' : 'object-contain')
						}
					/>
					<div className="absolute inset-0 rounded-2xl" />
				</div>
				<div className="max-w-xl">
					<div className="mt-8 flex items-center gap-x-4 text-xs">
						<time dateTime={dateTime} className="basecolor">
							{date}
						</time>
						<span className="relative z-10 rounded-full bg-zinc-800 px-3 py-1.5 font-medium text-zinc-100">
							{post?.category?.title}
						</span>
					</div>
					<div className="group relative">
						<h3 className="mt-3 text-lg font-semibold leading-6">
							<span className="absolute inset-0" />
							{post.title}
						</h3>
						<p className="basecolor mt-5 line-clamp-3 text-sm leading-6">
							{post?.excerpt}
						</p>
					</div>
				</div>
			</article>
		</Link>
	);
};
export default BlogItem;
