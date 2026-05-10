import React, { useRef, useState ,Suspense} from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Bounds, Center, Environment, OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three';
import { textSpot } from './App';
import { SphereGeometry } from 'three';

export interface AnnotationSpotInterface {
  position:Vector3;
  
}
const  AnnotationSphere = ({ position}:AnnotationSpotInterface) => {

    return(
        <mesh position={[position.x, position.y, position.z]} scale={.05}>
      <sphereGeometry  />
      <meshStandardMaterial color={"blue"} />
    </mesh>
    )
}

export default AnnotationSphere;