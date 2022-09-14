import React from 'react'

import "./css/doc.css"
import {Sample} from '../component/import';
import {Intro,Installation, Avatar,Alert, Badge, Button, Image, Input,Card,List,Toast,NavDoc,Modal,Rating,TxtUtility} from "../doc/import"
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
                <Route path='alert' element={<Alert/>}></Route>
                <Route path='badge' element={<Badge/>}></Route>
                <Route path='button' element={<Button/>}></Route>
                <Route path='image' element={<Image/>}></Route>
                <Route path='input' element={<Input/>}></Route>
                <Route path='card' element={<Card/>}></Route>
                <Route path='list' element={<List/>}></Route>
                <Route path='toast' element={<Toast/>}></Route>
                <Route path='utility' element={<TxtUtility/>}></Route>
                <Route path='modal' element={<Modal/>}></Route>
                <Route path='rating' element={<Rating/>}></Route>
                <Route path='navigation' element={<NavDoc/>}></Route>
                <Route path='sample' element={<Sample/>}></Route>
                </Routes>
            </div>
            {console.log(index)}
            {index.length>1?(<div className="doc-right-sidenav">
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