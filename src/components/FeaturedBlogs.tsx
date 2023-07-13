import mockup from '@/assets/images/mockup.png';
import { blogs, blogsMeta } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import BlogItem from './BlogItem';
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
					<p className="basecolor mt-2 text-lg leading-8">
						Op mijn blog schrijf ik over de nieuwste technologieën,
						frameworks en tools die ik gebruik. Ook schrijf ik over
						mijn ervaringen met het opzetten van een eigen bedrijf.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post, index) => (
						<BlogItem {...post} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
