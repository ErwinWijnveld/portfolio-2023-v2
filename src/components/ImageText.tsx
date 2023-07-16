import Image from 'next/image';

const ImageText = ({ image, alt, content, i, length }: any) => {
	return (
		<div
			style={{
				zIndex: '-' + i,
			}}
			className="imagetextslide absolute inset-0 flex h-full flex-col items-center gap-4 md:flex-row md:gap-10"
		>
			{image && (
				<div className="relative aspect-[2] w-full shrink-0 overflow-hidden rounded-full md:aspect-[.5] md:h-full md:w-auto">
					<Image
						fill
						src={image}
						alt={alt}
						className="object-cover"
						placeholder="blur"
					/>
				</div>
			)}
			<div className="pagination flex shrink-0 items-center justify-center gap-2 md:flex-col">
				{[...Array(length)]?.map((_, index) => (
					<div
						key={index}
						className={`h-[6px] w-8 rounded-full md:h-[41px] md:w-[6px] ${
							i === index ? 'bg-medium-blue' : 'bg-light-sand'
						}`}
					/>
				))}
			</div>
			<div className="content flex flex-col justify-center md:h-full">
				{content?.title && (
					<h3 className="border-main-sand text-dark-blue max-w-max border-b-2 pb-1 text-lg font-bold md:pb-2 md:pr-20 md:text-2xl">
						{content?.title}
					</h3>
				)}
				{content?.text && (
					<div
						className="text-medium-blue text-sm md:text-base lg:text-xl"
						dangerouslySetInnerHTML={{ __html: content?.text }}
					/>
				)}
			</div>
		</div>
	);
};
export default ImageText;
