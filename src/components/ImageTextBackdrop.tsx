import Link from '@/components/presets/Link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const ImageTextBackdrop = ({ rtl, image, alt, title, text, cta }: any) => {
	return (
		<section className="overflow-x-clip py-12 md:py-24">
			<div className="container items-center gap-24 md:flex">
				<div className="backglow relative mb-8 aspect-[.88] w-full shrink-0 md:mb-0 md:w-[calc(50%_-_4rem)]">
					<Image
						src={image}
						alt={alt}
						className="h-full w-full overflow-hidden rounded-[2rem] object-cover  ring-1 ring-zinc-100/20"
						placeholder="blur"
					/>
				</div>
				<div className={'grow ' + (rtl ? '' : '-order-1 lg:pl-24')}>
					<h2 className="monument mb-4 max-w-sm">{title}</h2>
					<div
						className="basecolor mb-4 max-w-sm"
						dangerouslySetInnerHTML={{ __html: text }}
					></div>
					{cta?.href && (
						<Link className="group" href={cta?.href}>
							{cta?.title}{' '}
							<ArrowRightIcon className="ml-1 inline-block h-4 w-4 transition group-hover:translate-x-1" />
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};
export default ImageTextBackdrop;
