// App.js
import React, { ChangeEvent, useState, useEffect } from 'react';
import ModelViewer from './ModelViewer';
import './App.css'
import AnnotationMenu from './AnnotationMenu';
import { Vector3 } from 'three';

export interface textSpot{
  text:string;
  position:Vector3
}

const App = () => {
  const [modelPath, setModelPath] = useState<string | null>(null);
  const [annotateMode,setAnnotateMode] = useState<boolean>(false);
  const [annotatedSpot,setAnnotatedSpot]= useState<Vector3|null>(null);
  const [textSpots,setTextSpots]= useState<textSpot[]>([])
  


  useEffect(()=>{
  },[])


  useEffect(()=>{
    setAnnotateMode(false)
  },[textSpots])


  useEffect(()=>{
    setAnnotatedSpot(null);

  },[modelPath,annotateMode])

  const addTextSpot=(newSpot:textSpot)=>{
      setTextSpots(prev=>[...prev,newSpot])
  }

  const toggleAnnotationMode=(toggle:boolean)=>{
    setAnnotateMode(toggle);
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a local URL for the uploaded file
      const url = URL.createObjectURL(file);
      setModelPath(url);
    }  
  };

  const handleAnnotationClick=(spot:Vector3)=>{
    setAnnotatedSpot(spot);
  }

  return (
    
    <div className="container">
      {
        modelPath ===null?
      <div>
        <h1>Select GLB Model</h1>

      <input type="file" 
          accept=".glb,.gltf" 
          onChange={handleFileChange}
      />
      </div>:
      <>
      <ModelViewer modelPath={modelPath} annotateMode={annotateMode} setSpot={handleAnnotationClick} textSpots={textSpots} annotatedPos={annotatedSpot} annotationMode={annotateMode}/>
      <AnnotationMenu annotating={annotateMode} toggleAnnotationMode={toggleAnnotationMode} annotatedSpot={annotatedSpot} submitHandle={addTextSpot}/>
      </>
      }
      
    </div>
  );
};

export default App;