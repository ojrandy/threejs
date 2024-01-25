import { Canvas } from '@react-three/fiber';
import {  Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';




const CanvasModel = () => {
  return (
    <Canvas
    shadows
    camera={{position: [0, 0, 0], fov: 30}} // fov is the field of view. it makes the shirt larger by bring the Camera closer
    gl={{ preserveDrawingBuffer: true}}
    className = "w-full max-w-full h-full trnsition-all ease-in"
    > 
      <ambientLight intensity={0.5} />
      <Environment  preset="city"/>

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel;

// This will just point to the shirt 
// We will then use the Camera ring to make things bigger
