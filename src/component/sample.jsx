import React,{useEffect} from 'react'
import { useData } from '../context/context'

const Sample = () => {
  const {setIndex}=useData();
  useEffect(()=>{

    setIndex(prev=>prev=[
      "sample1",
      "sample2",
      "sample2",
      "sample2",
      "sample2",
      "sample2",
      "sample2",
      "sample2",
      // "sample2",
      // "sample2",
      // "sample2",
      // "sample2",
      // "sample2",
      // "sample2",
      // "sample2",
      // "sample2",
      // "sample2",
    ])
  })
  return (
    <div>
      <h1 id='sample1'> Sample1</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloribus asperiores mollitia ea, aliquam molestias quo possimus, esse est officiis iusto repellendus tempora magni soluta enim recusandae quasi error delectus.
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet delectus cum beatae sint numquam repudiandae vel molestiae, similique voluptas odit quis alias labore. Esse doloribus ut, eius aut atque inventore!
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 id='sample2'>sample 2</h1>   
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus sapiente harum magni fugit totam voluptatem facilis modi commodi. Quos ab, eum commodi nemo nobis labore minus excepturi modi nulla.  
    </div>
  )
}

export default Sample