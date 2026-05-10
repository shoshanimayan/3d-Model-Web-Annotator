import React, { useRef, useState ,Suspense, useEffect} from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Bounds, Center, Environment, OrbitControls } from '@react-three/drei'
import ModelItem, {ModelProps} from './Model';
import {   Vector3 } from 'three';
import { textSpot } from './App';
import TextSphere from './TextSphere';
import * as THREE from 'three';
import AnnotationSphere from './AnnotationSphere';

export interface ModelViewerProps {
  modelPath: string|null;
  annotateMode: boolean;
  setSpot: (arg:Vector3)=>void
  textSpots: textSpot[];
  annotatedPos: THREE.Vector3|null;
  annotationMode: boolean;
}


const ModelViewer = ({ modelPath, setSpot, textSpots,annotatedPos , annotateMode}:ModelViewerProps) => {

  useEffect(()=>{
   

  },[textSpots,annotatedPos])



  const RenderTextSpots: React.FC=()=>{
   return (
    <group>
    
    </group>
  );
  }


  return (
    
    <div className='r3fContainer'>
    {modelPath&&<Canvas>
        <Suspense fallback={null}>
          <Bounds>
          <ModelItem url={modelPath} setSpot={setSpot} annotationMode={annotateMode}/>
              {annotatedPos&& <AnnotationSphere position={annotatedPos}/>}

              {textSpots.map((point, index) => (
        <TextSphere text={point.text} position={point.position}/>
      ))
          }
          </Bounds>
          <OrbitControls makeDefault/>
          <ambientLight intensity={3} />

        </Suspense>
      </Canvas>}
    </div>
  );
};

export default ModelViewer;