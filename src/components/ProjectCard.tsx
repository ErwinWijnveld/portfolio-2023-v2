import Link from '@/components/presets/Link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const ProjectCard = ({ title, label, description, thumbnail, href }: any) => {
	const Component = href ? Link : 'div';
	return (
		<Component
			href={href}
			target={href ? '_blank' : undefined}
			className={
				'group relative mb-6 block  overflow-hidden rounded-2xl ' +
				(href ? 'cursor-pointer' : '')
			}
		>
			<Image
				src={thumbnail?.image}
				alt={thumbnail?.alt}
				placeholder="blur"
			/>
			<div
				className={
					'overlay absolute inset-0 flex h-full w-full flex-col justify-end bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent p-6 transition duration-300 group-hover:visible group-hover:opacity-100 md:p-10 lg:invisible lg:opacity-0 lg:backdrop-blur-sm ' +
					(href ? 'cursor-pointer' : '')
				}
			>
				<h2 className="monument text-lg md:text-2xl">{title}</h2>
				<p className="text-xs md:text-base">{description}</p>
				{href && (
					<div className="absolute right-4 top-4 origin-top-right scale-75 cursor-pointer p-4 md:right-8 md:top-8 md:scale-100">
						<ArrowTopRightOnSquareIcon className="h-6 w-6 cursor-pointer text-red-500" />
						<div className="absolute inset-0 h-full w-full animate-spin-slower cursor-pointer rounded-full border-[2px] border-dashed border-red-500"></div>
					</div>
				)}
			</div>
		</Component>
	);
};
export default ProjectCard;
