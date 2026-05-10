import React, { useRef, useState ,Suspense} from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Bounds, Center, Environment, OrbitControls,Html } from '@react-three/drei'
import { Vector3 } from 'three';
import { textSpot } from './App';
import { SphereGeometry } from 'three';



const TextSphere = ({ text, position }:textSpot) => {

    const [hover,setHover]= useState<boolean>(false);


    return(<>
        <mesh position={[position.x, position.y, position.z]} scale={.05} onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}>
      <sphereGeometry  />
      <meshStandardMaterial color={"red"} />
    </mesh>
    {hover&&<Html occlude center position={[position.x,position.y+0.25,position.z]}>
              <div className='tag'>{text}</div>
    </Html>}
    </>
    )
}

export default TextSphere;