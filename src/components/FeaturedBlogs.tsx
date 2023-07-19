import { blogs } from '@/data/blogs';
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
			<div className="overflow-hidden">
				<div className="mx-auto max-w-2xl px-4 text-center">
					<p className="inline bg-gradient-to-r from-[#FF29A8] to-[#FFBB00] bg-clip-text text-lg font-semibold text-transparent">
						Blog
					</p>
					<h2 className="mt-2 ">Uitgelichte blogartikelen</h2>
					<p className="basecolor mt-2 md:text-lg ">
						Op mijn blog schrijf ik over de nieuwste technologieën,
						frameworks en tools die ik gebruik. Ook schrijf ik over
						mijn ervaringen met het opzetten van een eigen bedrijf.
					</p>
				</div>
				<div className=" overflow-scroll">
					<div className="container mx-auto mt-16 grid min-w-max grid-cols-3 gap-x-4 gap-y-20 md:gap-x-8 lg:min-w-0">
						{posts.map((post, index) => (
							<BlogItem
								className="w-[240px] xs:w-[320px] sm:w-[350px] lg:w-auto"
								{...post}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
