import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        leftglasseslens: THREE.Mesh;
        ['Tube_&_Box_7']: THREE.Mesh;
        rightglasslens: THREE.Mesh;
        ['Tube_&_Box_7_1']: THREE.Mesh;
        glassesunion: THREE.Mesh;
        leftglassestemple: THREE.Mesh;
        rightglassestemple: THREE.Mesh;
        ['Sphere_3_&_Cone_1']: THREE.Mesh;
        righthairlock: THREE.Mesh;
        ['Sphere_1_&_Sphere_2']: THREE.Mesh;
        rightEar: THREE.Mesh;
        leftEar: THREE.Mesh;
        ['Torus_1_&_Box_1']: THREE.Mesh;
        ['Torus_&_Box']: THREE.Mesh;
        ['Box_5_&_Sphere_4']: THREE.Mesh;
        hpcushionright: THREE.Mesh;
        ['Box_5_&_Sphere_4_1']: THREE.Mesh;
        hpcushionleft: THREE.Mesh;
        ['Box_4_&_Torus_2']: THREE.Mesh;
        body: THREE.Mesh;
        ['Box_3_&_Sphere']: THREE.Mesh;
        ['Box_2_&_Sphere_6']: THREE.Mesh;
        head: THREE.Mesh;
    };
    materials: {
        Xena: THREE.MeshStandardMaterial;
        ['Day Glow']: THREE.MeshStandardMaterial;
        ['Xena 1']: THREE.MeshStandardMaterial;
        ['Day Glow 1']: THREE.MeshStandardMaterial;
        Luna: THREE.MeshStandardMaterial;
        ['Luna 1']: THREE.MeshStandardMaterial;
        ['Luna 2']: THREE.MeshStandardMaterial;
        Bare: THREE.MeshStandardMaterial;
        ['Bare 2']: THREE.MeshStandardMaterial;
        Tulip: THREE.MeshStandardMaterial;
        ['Euphoria 1']: THREE.MeshStandardMaterial;
        Euphoria: THREE.MeshStandardMaterial;
        ['Dizzy Days']: THREE.MeshStandardMaterial;
        ['Dizzy Days 1']: THREE.MeshStandardMaterial;
        ['Panorama 1']: THREE.MeshStandardMaterial;
        ['Free Spirit 1']: THREE.MeshStandardMaterial;
        Panorama: THREE.MeshStandardMaterial;
        ['Free Spirit']: THREE.MeshStandardMaterial;
        ['California Dream']: THREE.MeshStandardMaterial;
        Nirvana: THREE.MeshStandardMaterial;
        Cosmopolitan: THREE.MeshStandardMaterial;
        ['Cosmopolitan 1']: THREE.MeshStandardMaterial;
        Yolanda: THREE.MeshStandardMaterial;
    };
};

const modelName: string = '/aboutMeModel.glb';

export default function Model({ ...props }) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF(modelName) as GLTFResult;
    const modelScale: Vector3 = [0.03, 0.03, 0.03];
    const originY: number = -1;
    const positions: { [key: string]: Vector3 } = {
        bodyLevel: [0, -2 + originY, 0],
        headLevel: [0, -0.5 + originY, 0],
        earLevel: [0, 1 + originY, 0],
        glassesLevel: [-0.12, 1.12 + originY, 1.35],
        headphonesLevel: [0.02, -1.2 + originY, 0.65],
        hairLevel: [-0.01, 0 + originY, -0.3],
        eyeLevel: [-0.1, 1.35 + originY, 1.25],
        mouthLevel: [0.09, -0.25 + originY, 1.15],
        innerMouthLevel: [0.09, -0.2 + originY, 1.21],
    };
    const modelDefaultRotation: Vector3 = [-Math.PI / 2, 0, -Math.PI / 2];
    const headPhonesRotation: Vector3 = [-Math.PI / 2 + 0.2, 0, -Math.PI / 2];
    const mouthScale: Vector3 = [0.03, 0.035, 0.03];
    return (
        <group ref={group} {...props} dispose={null}>
            <group
                position={positions.glassesLevel}
                rotation={modelDefaultRotation}
                scale={modelScale}
            >
                <group position={[0.05, -19.68, 0.01]}>
                    <mesh
                        geometry={nodes.leftglasseslens.geometry}
                        material={materials.Xena}
                        position={[-2.35, -1.06, 12.13]}
                        rotation={[0, 1.54, 0]}
                    />
                    <mesh
                        geometry={nodes['Tube_&_Box_7'].geometry}
                        material={materials['Day Glow']}
                        position={[-1.91, -0.4, 10.32]}
                        rotation={[0, 1.56, 0]}
                    />
                </group>
                <group
                    position={[0.05, 21.66, 0.01]}
                    rotation={[0, -0.01, -3.09]}
                >
                    <mesh
                        geometry={nodes.rightglasslens.geometry}
                        material={materials['Xena 1']}
                        position={[-2.35, -1.06, 12.13]}
                        rotation={[0, 1.54, 0]}
                    />
                    <mesh
                        geometry={nodes['Tube_&_Box_7_1'].geometry}
                        material={materials['Day Glow 1']}
                        position={[-3.23, -0.34, 10.31]}
                        rotation={[0, 1.56, 0]}
                    />
                </group>
                <mesh
                    geometry={nodes.glassesunion.geometry}
                    material={materials.Luna}
                    position={[0.51, -5.44, 13.26]}
                    rotation={[-1.57, 0, 0]}
                />
                <mesh
                    geometry={nodes.leftglassestemple.geometry}
                    material={materials['Luna 1']}
                    position={[-37.52, -46.8, 12.31]}
                    rotation={[-1.69, 1.21, 0.11]}
                />
                <mesh
                    geometry={nodes.rightglassestemple.geometry}
                    material={materials['Luna 2']}
                    position={[-40.18, 53.84, 12.31]}
                    rotation={[1.67, 1.11, 3.06]}
                />
            </group>
            <group
                position={positions.hairLevel}
                rotation={modelDefaultRotation}
                scale={modelScale}
            >
                <mesh
                    geometry={nodes['Sphere_3_&_Cone_1'].geometry}
                    material={materials.Bare}
                    position={[37.63, -15.02, 60.66]}
                    rotation={[0.17, 0, 0]}
                    scale={[1.23, 2.52, 1]}
                />
                <mesh
                    geometry={nodes.righthairlock.geometry}
                    material={materials['Bare 2']}
                    position={[33.38, 21.19, 54.34]}
                    rotation={[-0.38, -0.34, 0.7]}
                    scale={[1.23, 2.52, 1]}
                />
                <mesh
                    geometry={nodes['Sphere_1_&_Sphere_2'].geometry}
                    material={materials.Tulip}
                    position={[-0.17, 0.78, 0.46]}
                    scale={[1.32, 1.42, 1.23]}
                />
            </group>
            {/* ears */}
            <group
                position={positions.earLevel}
                rotation={modelDefaultRotation}
                scale={modelScale}
            >
                <mesh
                    geometry={nodes.rightEar.geometry}
                    material={materials['Euphoria 1']}
                    position={[-2.88, 49.83, 5.44]}
                    rotation={[0.8, 1.46, -0.26]}
                />
                <mesh
                    geometry={nodes.leftEar.geometry}
                    material={materials.Euphoria}
                    position={[-2.88, -50.36, 6.44]}
                    rotation={[0.8, 1.46, -0.26]}
                />
            </group>
            {/* eyes */}
            <group
                position={positions.eyeLevel}
                rotation={modelDefaultRotation}
                scale={modelScale}
            >
                <mesh
                    geometry={nodes['Torus_1_&_Box_1'].geometry}
                    material={materials['Dizzy Days']}
                    position={[0, -21.43, -2.27]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[-0.17, 0.18, 0.28]}
                />
                <mesh
                    geometry={nodes['Torus_&_Box'].geometry}
                    material={materials['Dizzy Days 1']}
                    position={[0, 20.57, -3.27]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.16, 0.18, 0.25]}
                />
            </group>
            <group
                position={positions.headphonesLevel}
                rotation={headPhonesRotation}
                scale={modelScale}
            >
                <group position={[7.84, 19.21, 0]} rotation={[0, 0, 2.97]}>
                    {/* hpearright  */}
                    <mesh
                        geometry={nodes['Box_5_&_Sphere_4'].geometry}
                        material={materials['Panorama 1']}
                        position={[5.55, -14.99, 2.67]}
                        rotation={[0, 0, 0.32]}
                    />
                    <mesh
                        geometry={nodes.hpcushionright.geometry}
                        material={materials['Free Spirit 1']}
                        position={[1.08, -0.07, 18.85]}
                        rotation={[-1.52, -0.23, 0.04]}
                    />
                </group>
                <group position={[7.84, -19.38, 0]}>
                    {/* hpearleft  */}
                    <mesh
                        geometry={nodes['Box_5_&_Sphere_4_1'].geometry}
                        material={materials.Panorama}
                        position={[5.55, -14.99, 2.67]}
                        rotation={[0, 0, 0.32]}
                    />
                    <mesh
                        geometry={nodes.hpcushionleft.geometry}
                        material={materials['Free Spirit']}
                        position={[1.08, -0.07, 18.85]}
                        rotation={[-1.52, -0.23, 0.04]}
                    />
                </group>
                {/* bandhp  */}
                <mesh
                    geometry={nodes['Box_4_&_Torus_2'].geometry}
                    material={materials['California Dream']}
                    position={[-34.25, 5.44, 8.8]}
                    rotation={[-0.04, 0.19, -3.14]}
                />
            </group>
            <mesh
                geometry={nodes.body.geometry}
                material={materials.Nirvana}
                rotation={modelDefaultRotation}
                position={positions.bodyLevel}
                scale={modelScale}
            />
            {/* outside mouth */}
            <mesh
                geometry={nodes['Box_3_&_Sphere'].geometry}
                material={materials.Cosmopolitan}
                position={positions.mouthLevel}
                rotation={modelDefaultRotation}
                scale={mouthScale}
            />
            {/* inside mouth */}
            <mesh
                geometry={nodes['Box_2_&_Sphere_6'].geometry}
                material={materials['Cosmopolitan 1']}
                position={positions.innerMouthLevel}
                rotation={modelDefaultRotation}
                scale={mouthScale}
            />
            <mesh
                geometry={nodes.head.geometry}
                material={materials.Yolanda}
                position={positions.headLevel}
                rotation={modelDefaultRotation}
                scale={modelScale}
            />
        </group>
    );
}

useGLTF.preload(modelName);
