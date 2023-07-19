import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLenis } from '@studio-freight/react-lenis';
import { useRef, useState } from 'react';
import { Model } from './Model';

const ThreeDElement = () => {
	const [rotation, setRotation] = useState(0);

	useLenis(({ scroll }: any) => {
		// set the rotation of the mesh based on the scroll position
		setRotation(scroll / -1000);
	});
	return (
		<div
			id="model"
			className="fixed inset-x-0 top-0 -z-10 h-screen max-h-[900px] w-screen"
		>
			<Canvas>
				<ambientLight intensity={0.5} />
				<spotLight position={[50, 50, 50]} angle={0.15} penumbra={1} />
				<pointLight position={[-50, -50, -50]} />
				<Model rotation={[rotation, 0, rotation]} />
				{/* <OrbitControls /> */}
			</Canvas>
		</div>
	);
};
export default ThreeDElement;
