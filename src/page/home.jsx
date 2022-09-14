import React from 'react'

import "./css/home.css"
import { useNavigate } from 'react-router-dom'
import { Installation, Intro, TxtUtility} from '../doc/import'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    
    <div className="home-header">
        <div className="home-header-head-txt">
          BUI
        </div>
        <div className="home-header-sub-txt">
          Build<span className="home-header-clr-txt"> UI
          </span>
        </div>
        <div className="home-header-small-sub-txt">
          This is the best UI library for webdesign. Now you can do design faster than before,
          to read the documentation of <span className="home-header-clr-txt">BUI</span>
          
          <div className="bui-btn bui-btn-fancy  home-header-btn" onClick={()=>navigate("/doc/intro")}>
          
            Documentation
        
            </div>
        </div>
    </div>
    <div className="home-sub-container">
      <Intro/>
      <Installation/>
      <TxtUtility/>
    </div>
    
    </>


  )
}

export default Home