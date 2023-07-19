import Script from 'next/script';

const SplineThree = () => {
	return (
		<>
			<Script
				id="spline"
				strategy="afterInteractive"
				type="module"
				src="https://unpkg.com/@splinetool/viewer@0.9.381/build/spline-viewer.js"
			></Script>
			<div className="nospline pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
				{/* @ts-ignore */}
				<spline-viewer
					class="h-full w-full"
					url="https://prod.spline.design/tFwGilj7o1vRHEUS/scene.splinecode"
					// @ts-ignore
				></spline-viewer>
			</div>
		</>
	);
};
export default SplineThree;
