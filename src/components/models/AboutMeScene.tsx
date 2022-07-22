import { Canvas, RootState, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Model from './AboutMeModel';

const CameraController = () => {
  const { camera, gl } = useThree<RootState>();
  useEffect(
    () => {
      const controls: OrbitControls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

const Plane = () => {
  return (
    <mesh position={[0,-3,0]} rotation={[-Math.PI/2,0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100,100]} />
      <meshLambertMaterial attach="material" color="lightgreen" />
    </mesh>
  );
}

export const AboutMeScene = () => {
    return (
      <div style={{overflow: 'hidden', border: '5px solid #000', borderRadius: '5px'}}>
        <Canvas
            style={{
                backgroundColor: 'white',
                width: '100%',
                height: '400px',
            }}
        >
            <CameraController />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <Plane />
        </Canvas>
      </div>
    );
};
