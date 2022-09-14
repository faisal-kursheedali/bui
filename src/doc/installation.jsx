import React,{useEffect} from 'react';
import {useData} from "../context/context"
import "./css/installation.css"
import installImg from "../image/doc-install.svg"
import snippetImg from "../image/doc-install-snippet.svg"
import {useNavigate} from "react-router-dom"

const Installation = () => {
    const {setIndex}=useData()
    const navigate=useNavigate();
    useEffect(()=>{
        setIndex(prev=>prev=[])
    },[setIndex])
    // let code=`<>
    // This is code
    // </>`
  return (
    <>
   <div className="install">
    <div className="install-container">
      <div className="install-left">
      <img src={installImg} alt="" />
      </div>
      <div className="install-right">
        <div className="install-right-head">
          BUI
        </div>
        <div className="install-right-sub-main-txt">
          Installation
        </div>
        <div className="install-right-sub-txt">
          Installation of bui is very easy.Since HTML is the skeleton of any website and all the website have html file.So you just need to add this tag to your <span className='bui-txt-code install-right-txt-code'> index.html</span> file.
        </div>
        <div className="install-right-sub-example-code">
          {
            `<link rel="stylesheet" href="https://built-ui-data.netlify.app/index.css">`
          }
        </div>
        <button className="install-right-sub-button bui-btn-outline-fancy" onClick={()=>navigate("/doc/avatar")}>Start Designing</button>
      </div>
    </div>
      <div className="install-buttom">
      <img src={snippetImg} alt="" className='install-snippet'/>
      </div>
   </div>
  

   
    </>
  )
}

export default Installation