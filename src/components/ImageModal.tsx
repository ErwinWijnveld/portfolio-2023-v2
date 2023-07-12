import Image from 'next/image';

const ImageModal = ({ setOpenedImage, image }: any) => {
	return (
		<div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden">
			<div
				className="absolute inset-0 h-full w-full bg-black/70"
				onClick={() => setOpenedImage(null)}
			>
				<Image
					src={image?.image}
					alt={image?.alt}
					className="absolute inset-0 h-full w-full object-contain p-[5%]"
				/>
			</div>
		</div>
	);
};
export default ImageModal;
