import React, {useEffect,useState} from 'react'
import "./css/createDoc.css"
import { TxtInDoc } from './import';
import { useData } from "../context/context";


const CreateDoc = ({ data }) => {
  const { index,setIndex } = useData([]);
  const[userInput,setUserInput]=useState("");
  useEffect(() => {
    setIndex(prev => prev = data.topics);
    if (index.length>1) {
      
      setIndex(prev=>prev=[...prev,"practice"]);
    }
  }, [setIndex]);
  const output=document.querySelector("#user-try-output");
  // const userOutPutFnc=(input)=>{
  //   const userCode=eval(input)
  //   console.log(userCode);
  //   return(
  //     {
  //       userCode
  //     }
  //   )
  // }
  return (
    <>
      <div className="create-doc-container">
        {
          data.content.map((item, index) => {
            return <TxtInDoc data={item} key={index} />
          })
        }
      {
        data.userTry?(<div className="doc-user-try-container" id='practice'>
        <div className="doc-user-try-head">
          Let's try some thing :
        </div>
        <div className="doc-user-try-txt-box-container">         
        <textarea name="" id=""  className="doc-user-try-txt-box" placeholder='Enter the code here' value={userInput} onChange={(e)=>{
          setUserInput(e.target.value)
        }} >
          
        </textarea>
        <div className="doc-user-try-output" id='user-try-output'>
          
        </div>
        <button className="bui-btn-fancy doc-user-try-run-btn" onClick={()=>{
          console.log(userInput);
          output.innerHTML=userInput;
        }}>
          RUN
        </button>
        </div>
  
        </div>):("")
      }
      

        
      
      </div>
    </>
  )
}

export default CreateDoc