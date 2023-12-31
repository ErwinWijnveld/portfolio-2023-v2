import fullscreengradient from '@/assets/images/gradients/fullscreengradient.png';
import Image from 'next/image';
const FullScreenGradient = ({ className }: any) => {
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
				<g clipPath="url(#clip0_11_9)">
					<rect width="1440" height="900" fill="black" />
					<g filter="url(#filter0_f_11_9)">
						<ellipse
							cx="898.624"
							cy="880.79"
							rx="592.5"
							ry="327"
							transform="rotate(-6.48121 898.624 880.79)"
							fill="#8349FF"
						/>
					</g>
					<g filter="url(#filter1_f_11_9)">
						<path
							d="M1315 679.5C1368.98 603.022 1372.06 544.65 1399 455C1451 281.946 1412.7 168.3 1474.5 -1.49998C1600.6 -347.965 1818.65 742.641 1508.5 942C1313.53 1067.32 743.009 1097.37 915 942C983.687 879.951 1049.43 886.503 1127 836C1207.06 783.88 1259.91 757.546 1315 679.5Z"
							fill="url(#paint0_linear_11_9)"
						/>
					</g>
					<g filter="url(#filter2_f_11_9)">
						<path
							d="M231.881 731.946C90.0739 741.276 -2.47822 793.621 -92.5007 915.407C-274.87 1162.12 790.639 1240.5 642.249 969.452C548.686 798.552 413.013 720.029 231.881 731.946Z"
							fill="#0013FF"
						/>
					</g>
					<g filter="url(#filter3_f_11_9)">
						<path
							d="M237.84 800.355C119.931 808.113 42.9763 851.636 -31.8753 952.899C-183.511 1158.04 702.435 1223.2 579.052 997.836C501.256 855.736 388.447 790.447 237.84 800.355Z"
							fill="#00FFFF"
						/>
					</g>
				</g>
				<defs>
					<filter
						id="filter0_f_11_9"
						x="8.73486"
						y="249.002"
						width="1779.78"
						height="1263.58"
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
							result="effect1_foregroundBlur_11_9"
						/>
					</filter>
					<filter
						id="filter1_f_11_9"
						x="633.106"
						y="-318.976"
						width="1284.19"
						height="1616.53"
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
							result="effect1_foregroundBlur_11_9"
						/>
					</filter>
					<filter
						id="filter2_f_11_9"
						x="-413.572"
						y="430.769"
						width="1370.05"
						height="1008.95"
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
							result="effect1_foregroundBlur_11_9"
						/>
					</filter>
					<filter
						id="filter3_f_11_9"
						x="-249.396"
						y="599.377"
						width="1040.28"
						height="740.033"
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
							result="effect1_foregroundBlur_11_9"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_11_9"
						x1="1421.5"
						y1="316"
						x2="1224.5"
						y2="887"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FF0095" />
						<stop offset="1" stopColor="#FFCDFF" />
					</linearGradient>
					<clipPath id="clip0_11_9">
						<rect width="1440" height="900" fill="white" />
					</clipPath>
				</defs>
			</svg>
			<Image
				src={fullscreengradient}
				alt="Gradient webdesign  professionele webontwikkeling"
				className={
					'absolute inset-0 h-full w-full object-cover md:hidden ' +
					className
				}
			/>
		</>
	);
};
export default FullScreenGradient;
