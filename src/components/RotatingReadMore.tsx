const RotatingReadMore = ({ className }: any) => {
	return (
		<div
			onClick={(e) => {
				e.preventDefault();
				window.scrollTo({
					top: window.innerHeight,
					behavior: 'smooth',
				});
			}}
			className={
				'monument cursor-pointer opacity-100 transition duration-700 ease-out hover:scale-125 hover:opacity-100 ' +
				className
			}
		>
			<svg
				width="200"
				height="200"
				className="animate-spin-slower cursor-pointer "
			>
				<path
					id="circlePath"
					d="M100,100 m-50,0a50,50 0 1,0 100,0a50,50 0 1,0 -100,0"
					fill="transparent"
					className=" cursor-pointer"
				/>
				<text
					fill="#ffffff"
					style={{
						// uppercase
						textTransform: 'uppercase',
						letterSpacing: '0.52em',
						// small text
						fontSize: '0.63rem',
						// mirror text
						// textAnchor: 'middle',
					}}
					className=" cursor-pointer"
				>
					<textPath href="#circlePath">
						Lees meer&nbsp;●&nbsp;Lees meer&nbsp;●&nbsp;
					</textPath>
				</text>
			</svg>
		</div>
	);
};
export default RotatingReadMore;
