import React,{useEffect} from 'react';
import {useData} from "../context/context";
import "./css/intro.css"
import docIntroImg from "../image/doc-intro.svg"
import {useNavigate} from "react-router-dom"

const Intro = () => {
    const {setIndex}=useData();
    const navigate=useNavigate();
    useEffect(()=>{
        setIndex(prev=>prev=[]);
    },[])
  return (
    <>
    <div className="intro-container">
        <div className="intro-header">
            <div className="header-container">
            <div className="header-left">
                <div className="header-left-brand">
                    BUI
                </div>
                <div className="header-left-head-txt">
                    DOCUMENTATION
                </div>
                <div className="header-left-sub-txt">
                    BUI has the good documentation for clear understanding. Enjoy your web design with BUI
                </div>
                <button className="header-left-btn bui-btn-outline-fancy" onClick={()=>{
                    navigate("/doc/installation")
                }}>Installation</button>
            </div>
            <div className="header-right">
                {/* {docIntroImg} */}
                <img src={docIntroImg} alt="" />
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Intro