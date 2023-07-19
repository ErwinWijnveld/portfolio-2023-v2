import leftblue from '@/assets/images/gradients/leftblue.png';
import Image from 'next/image';

const LeftBlueGradient = ({ className }: any) => {
	return (
		<>
			<svg
				width="1440"
				height="1230"
				viewBox="0 0 1440 1230"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={
					'absolute left-0 -z-10 hidden -translate-x-40 md:block ' +
					className
				}
				preserveAspectRatio="xMidYMid meet"
			>
				<g clipPath="url(#clip0_306_35)">
					<g filter="url(#filter0_f_306_35)">
						<ellipse
							cx="219.273"
							cy="136.362"
							rx="219.273"
							ry="136.362"
							transform="matrix(0.738082 0.674711 -0.442241 0.896896 -349.511 200.812)"
							fill="#0034EB"
						/>
					</g>
					<g filter="url(#filter1_f_306_35)">
						<ellipse
							cx="512.389"
							cy="164.767"
							rx="512.389"
							ry="164.767"
							transform="matrix(0.646737 0.762713 -0.536727 0.843756 -282.761 19.2563)"
							fill="#0A34CD"
						/>
					</g>
					<g filter="url(#filter2_f_306_35)">
						<ellipse
							cx="747.271"
							cy="222.922"
							rx="747.271"
							ry="222.922"
							transform="matrix(0.725912 0.687788 -0.455077 0.890452 -793.106 -257)"
							fill="#00F3F9"
						/>
					</g>
					<g filter="url(#filter3_f_306_35)">
						<ellipse
							cx="236.117"
							cy="77.9137"
							rx="236.117"
							ry="77.9137"
							transform="matrix(0.963695 0.267004 -0.147804 0.989017 -377.083 383.755)"
							fill="#81FFD9"
						/>
					</g>
				</g>
				<defs>
					<filter
						id="filter0_f_306_35"
						x="-770.733"
						y="-70.8975"
						width="1045.52"
						height="1083.92"
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
							stdDeviation="175"
							result="effect1_foregroundBlur_306_35"
						/>
					</filter>
					<filter
						id="filter1_f_306_35"
						x="-632.878"
						y="-115.825"
						width="1186.13"
						height="1329.82"
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
							stdDeviation="125"
							result="effect1_foregroundBlur_306_35"
						/>
					</filter>
					<filter
						id="filter2_f_306_35"
						x="-1254.06"
						y="-445.647"
						width="1803.91"
						height="1802.23"
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
							stdDeviation="175"
							result="effect1_foregroundBlur_306_35"
						/>
					</filter>
					<filter
						id="filter3_f_306_35"
						x="-588.895"
						y="224.293"
						width="855.683"
						height="599.129"
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
							stdDeviation="100"
							result="effect1_foregroundBlur_306_35"
						/>
					</filter>
					<clipPath id="clip0_306_35">
						<rect width="1440" height="1230" fill="white" />
					</clipPath>
				</defs>
			</svg>
			<Image
				src={leftblue}
				alt="webdesign, website laten maken blauwe gradient professioneel"
				className={
					'absolute left-0 -z-10 block scale-125 object-cover md:hidden ' +
					className
				}
			/>
		</>
	);
};
export default LeftBlueGradient;
