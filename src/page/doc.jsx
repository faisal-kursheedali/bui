import React from 'react'

import "./css/doc.css"
import {Sample} from '../component/import';
import {Intro,Installation, Avatar} from "../doc/import"
import { Route, Routes } from 'react-router-dom';
import { useData } from '../context/context';

const Doc = () => {

    const {index}=useData();
  return (
    <>
        <div className="doc-container" >
            <div className="doc-main">
                
                <Routes>
                <Route path='intro' element={<Intro/>}></Route>
                <Route path='installation' element={<Installation/>}></Route>
                <Route path='avatar' element={<Avatar/>}></Route>
                <Route path='sample' element={<Sample/>}></Route>
                </Routes>
            </div>
            {index.length>0?(<div className="doc-right-sidenav">
                <ul className="doc-right-sidenav-list">
                    {
                        index.map(i=>{
                            return(
                                <li className="doc-right-sidenav-list-item">
                                    <a href={`#${i}`} className="bui-link-nostyle">{i}</a>
                                </li>
                                
                            )
                        })
                    }
                    
                    
                </ul>
                
            </div>):""}
        </div>
    </>
  )
}

export default Doc