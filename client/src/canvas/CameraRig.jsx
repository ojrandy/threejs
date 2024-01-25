import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import store from '../store'
import state from '../store';

// This is just recalling the properties in index.jsx
const CameraRig = ({children}) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
      // Setting the Mobile Responsiveness

      const isBreakpoint = window.innerWidth <= 1260;
      const isMobile = window.innerWidth <= 600;

     // Set the initial position 

    let targetPosition = [-0.4, 0, 2];
    if(snap.intro) {
      if(isBreakpoint) targetPosition = [0, 0, 2];
      if(isMobile) targetPosition = [0, 0.2, 2.5];
    } 
    else{
      if(isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2]
    }

    // Setting the Camera position 
      easing.damp3(state.camera.position, targetPosition, 0.25, delta)
      
    // Setting a smoth rotation
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0], 
      0.25, 
      delta
    )
  })

  return <group ref={group}>{children}</group>
  
}

export default CameraRig;

// This is going to be the position of the camera
// We use this to make the shirt bigger 
// The shirt in the shirt.jsx 
