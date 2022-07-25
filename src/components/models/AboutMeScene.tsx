import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { Canvas, RootState, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import theme from '../../resources/theme/CustomTheme.d';
import Model from './AboutMeModel';
import debounce from 'lodash/debounce';

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
    <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightgreen" />
    </mesh>
  );
}

const SceneOverlay = () => {
  const [visible, setVisible] = useState(true);

  const hideOverlay = () => {
    setVisible(false);
  };

  const showOverlay = () => {
    setVisible(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="overlay" style={{
        display: visible ? 'block' : 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: '.6',
        color: 'white',
        paddingTop: '20px',
        textAlign: 'center'
      }}
        onClick={debounce(hideOverlay, 500)}
        onMouseLeave={debounce(showOverlay, 5000)}
      >
        Interact using mouse
      </div>
    </ThemeProvider>
  );
}

export const AboutMeScene = () => {
  return (
    <div style={{
      overflow: 'hidden',
      position: 'relative', border: '5px solid #000', borderRadius: '5px'
    }}>
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
        <Model rotation={[0.2, -0.4, 0]} />
        <Plane />
      </Canvas>
      <SceneOverlay />
    </div>
  );
};
