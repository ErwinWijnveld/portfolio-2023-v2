import { useGLTF, useTexture } from '@react-three/drei';
import React, { useEffect, useState } from 'react';

export function Model(props: any) {
	const { nodes } = useGLTF('/logo_animatie.gltf') as any;
	const matcap = useTexture('/test.png');
	const [scale, setScale] = useState(0.8);

	const glassyMaterialProps = {
		reflectivity: 1.0, // Increase reflectivity for a glassy look (0.0 to 1.0)
		envMapIntensity: 4, // Increase the environment map intensity for reflection
		shininess: 100, // Increase the shininess for a polished look (10 to 1000)
		// side: THREE.DoubleSide, // Render both sides of the mesh for glass transparency
	};

	useEffect(() => {
		// get screen width
		const width = window.innerWidth;

		if (width < 768) {
			setScale(0.55);
		}
	}, []);

	return (
		<group {...props} position={[0, 0, 0]} scale={scale} dispose={null}>
			<group scale={0.01}>
				<group scale={1.269}>
					<group rotation={[0.561, 0.308, 0]}>
						<group
							position={[-237.811, 179.136, -42.668]}
							scale={1.232}
						>
							<mesh
								castShadow
								receiveShadow
								geometry={nodes.Shape_0.geometry}
								position={[1, 0, -1]}
								rotation={[0, -0.078, 0]}
							>
								<meshMatcapMaterial
									matcap={matcap}
									{...glassyMaterialProps}
								/>
							</mesh>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/logo_animatie.gltf');
