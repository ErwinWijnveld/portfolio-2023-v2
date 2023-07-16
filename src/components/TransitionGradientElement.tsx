const TransitionGradientElement = (props: any) => {
	return (
		<svg
			id="trans-gradient"
			preserveAspectRatio="xMidYMid slice"
			{...props}
			width="4320"
			height="900"
			viewBox="0 0 4320 900"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_318_13)">
				<rect x="1440" width="1440" height="900" fill="#000000" />
				<rect x="1440" width="1440" height="900" fill="#000000" />
				<rect
					x="2880"
					width="1440"
					height="900"
					fill="url(#paint0_linear_318_13)"
				/>
				<rect
					x="1440"
					y="900"
					width="1440"
					height="900"
					transform="rotate(180 1440 900)"
					fill="url(#paint1_linear_318_13)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_318_13"
					x1="2880"
					y1="450"
					x2="4320"
					y2="450"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#000000" />
					<stop offset="1" stop-color="#000000" stop-opacity="0" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_318_13"
					x1="1440"
					y1="1350"
					x2="2880"
					y2="1350"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#000000" />
					<stop offset="1" stop-color="#000000" stop-opacity="0" />
				</linearGradient>
				<clipPath id="clip0_318_13">
					<rect width="4320" height="900" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
export default TransitionGradientElement;
