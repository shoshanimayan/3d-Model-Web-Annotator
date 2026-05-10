import React, { useRef, useState, useEffect ,Suspense, ChangeEvent} from 'react';
import { Vector3 } from 'three';
import { textSpot } from './App';

export interface MenuProps {
  annotating: boolean;
  toggleAnnotationMode: (arg:boolean)=>void
  annotatedSpot: Vector3|null;
  submitHandle: (arg: textSpot)=>void
}

const AnnotationMenu: React.FC<MenuProps> = ({annotating,toggleAnnotationMode, annotatedSpot, submitHandle})=> 
{
    const [text,setText] = useState<string>("");
    
    useEffect(()=>{
        setText("")
    },[annotatedSpot,annotating])

    const handleEffect=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        setText(event.target.value)
    }
    
    return (
        <div className='AnnotationMenu'>
            {annotating===true?
            <>
            <span className='toggleArea'>
                <button className='annotationToggle' onClick={()=>{toggleAnnotationMode(false)}}>Switch Off Annotate Mode</button>

                {
                    annotatedSpot!==null? <p>X: { annotatedSpot.x.toFixed(2)} Y: {annotatedSpot.y.toFixed(3)} Z: { annotatedSpot.z.toFixed(2)}</p>:         <p> click on model to place blue annotation spot, type your annotation text, then click submit</p>

                }
            </span>
            <div className='textSpace'>
                <textarea  className='textInput' value={text} onChange={handleEffect} disabled={annotatedSpot===null} placeholder='place annotation text here' ></textarea>
                <button 
                disabled={annotatedSpot===null}
                className='annotationToggle'
                onClick={()=>{
                    if(text.length>0){
                    submitHandle({text: text, position: (annotatedSpot?annotatedSpot:new Vector3(0,0,0))});
                    setText("");
                    }
                }}
                 >Submit Annotation</button>
            </div>
            </>:
            <>
            <button 
            className='annotationToggle'
            onClick={()=>{toggleAnnotationMode(true)}}
            >Switch To Annotate Mode</button>
            <p>hover on red spheres to see annotations</p>
            </>}
        </div>
    )
}

export default AnnotationMenu
