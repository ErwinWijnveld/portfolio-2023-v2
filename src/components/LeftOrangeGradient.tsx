import leftorange from '@/assets/images/gradients/leftorange.png';
import Image from 'next/image';

const LeftOrangeGradient = () => {
	return (
		<>
			<svg
				width="1440"
				height="1205"
				viewBox="0 0 1440 1205"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="pointer-events-none absolute left-0 -z-10 hidden -translate-x-40 md:block"
				preserveAspectRatio="xMidYMid meet"
			>
				<g clipPath="url(#clip0_307_7)">
					<g filter="url(#filter0_f_307_7)">
						<ellipse
							cx="-284"
							cy="642"
							rx="572"
							ry="317"
							fill="#FF9900"
						/>
					</g>
					<g filter="url(#filter1_f_307_7)">
						<ellipse
							cx="17.4307"
							cy="452.29"
							rx="139"
							ry="352.216"
							transform="rotate(-24.0408 17.4307 452.29)"
							fill="#AB4700"
						/>
					</g>
				</g>
				<defs>
					<filter
						id="filter0_f_307_7"
						x="-1156"
						y="25"
						width="1744"
						height="1234"
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
							result="effect1_foregroundBlur_307_7"
						/>
					</filter>
					<filter
						id="filter1_f_307_7"
						x="-474.152"
						y="-174.374"
						width="983.166"
						height="1253.33"
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
							result="effect1_foregroundBlur_307_7"
						/>
					</filter>
					<clipPath id="clip0_307_7">
						<rect width="1440" height="1205" fill="white" />
					</clipPath>
				</defs>
			</svg>
			<Image
				src={leftorange}
				className="pointer-events-none absolute -top-1/2 left-0 -z-10 object-cover md:hidden"
				alt="left orange gradient professionele website laten maken"
			/>
		</>
	);
};
export default LeftOrangeGradient;
