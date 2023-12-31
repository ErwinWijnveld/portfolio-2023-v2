import fullscreengreen from '@/assets/images/gradients/fullscreengreen.png';
import Image from 'next/image';

const GreenFullscreenGradient = ({ className }: any) => {
	return (
		<>
			<svg
				width="1440"
				height="900"
				viewBox="0 0 1440 900"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={
					'absolute inset-0 hidden h-full w-full md:block ' +
					className
				}
				preserveAspectRatio="xMidYMid slice"
			>
				<g clipPath="url(#clip0_12_23)">
					<rect width="1440" height="900" fill="black" />
					<g filter="url(#filter0_f_12_23)">
						<ellipse
							cx="1468"
							cy="803"
							rx="1241"
							ry="803"
							fill="#006C68"
						/>
					</g>
					<g filter="url(#filter1_f_12_23)">
						<ellipse
							cx="1279.5"
							cy="1073"
							rx="672.5"
							ry="533"
							fill="#00D700"
						/>
					</g>
				</g>
				<defs>
					<filter
						id="filter0_f_12_23"
						x="-273"
						y="-500"
						width="3482"
						height="2606"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="250"
							result="effect1_foregroundBlur_12_23"
						/>
					</filter>
					<filter
						id="filter1_f_12_23"
						x="307"
						y="240"
						width="1945"
						height="1666"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="150"
							result="effect1_foregroundBlur_12_23"
						/>
					</filter>
					<clipPath id="clip0_12_23">
						<rect width="1440" height="900" fill="white" />
					</clipPath>
				</defs>
			</svg>
			<Image
				src={fullscreengreen}
				alt="webdesign, website laten maken groene gradient professioneel"
				className={
					'absolute inset-0 h-full w-full object-cover md:hidden ' +
					className
				}
			/>
		</>
	);
};
export default GreenFullscreenGradient;
