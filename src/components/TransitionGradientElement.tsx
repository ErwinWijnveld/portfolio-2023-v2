const TransitionGradientElement = (props: any) => {
	return (
		<div id="trans-gradient" {...props}>
			<div className="grid h-full w-full grid-cols-3">
				<div className="bg-gradient-to-r from-transparent to-black"></div>
				<div className="bg-black"></div>
				<div className="bg-gradient-to-r from-black to-transparent"></div>
			</div>
		</div>
	);
};
export default TransitionGradientElement;
