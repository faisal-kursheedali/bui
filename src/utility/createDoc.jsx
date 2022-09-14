import React, {
  // useEffect,
  useState} from 'react'
import "./css/createDoc.css"
import { TxtInDoc } from './import';
// import { useData } from "../context/context";


const CreateDoc = ({ data }) => {
  // const { setIndex } = useData();
  const[userInput,setUserInput]=useState("");
  console.log(data.topics);
  // const topic=data.topics
  
//  if (data.topics.length>0) {
  
  //  setIndex(prev => prev = data.topics);
   
  // }

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
     {/* <div className="doc-container"> */}
     <div className="create-doc-container">
     <div className="content">
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
     <div className="create-doc-container-side-nav">
     {data.topics.length>1?(
      // <div className="doc-right-sidenav">
                <ul className="doc-right-sidenav-list">
                    {
                        data.topics.map(i=>{
                            return(
                                <li className="doc-right-sidenav-list-item">
                                    <a href={`#${i}`} className="bui-link-nostyle">{i}</a>
                                </li>
                                
                            )
                        })
                    }
                    
                    
                </ul>
                
            // </div>
            ):""}
     </div>

        
      
      </div>
      
      
      {/* </div> */}
     {/* </div> */}
    </>
  )
}

export default CreateDoc