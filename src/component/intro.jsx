import React,{useEffect} from 'react'
import { useData } from '../context/context';

const Intro = () => {
    const {index,setIndex}=useData()
    useEffect(()=>{
        setIndex(prev=>prev=[]);
    },[])
  return (
    <div>Intro</div>
  )
}

export default Intro