import React, { useEffect } from 'react'
import { useGLTF , Stats, OrbitControls } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber';
import { Vector3 } from 'three';
import { NOMEM } from 'dns';

export interface ModelProps {
  url: string;
  setSpot: (arg:Vector3)=>void;
  annotationMode: boolean;
  
}

const ModelItem: React.FC<ModelProps> = ({url,setSpot, annotationMode})=> 
{
    const { scene } = useGLTF(url);

  useEffect(() => {
    return () => {
      // Clean up the blob URL when the component unmounts or URL changes
      if (url.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    };
  }, [url]);

  const handleClick=(event:ThreeEvent<MouseEvent>)=>{
    event.stopPropagation();

    if(annotationMode ){
      
      setSpot(event.point);
    }
  }

  const handlePointer=(event:ThreeEvent<MouseEvent>)=>{
    event.stopPropagation();
  }

  return <primitive  object={scene} onClick={handleClick} onPointerEnter={handlePointer} />;
}

export default ModelItem