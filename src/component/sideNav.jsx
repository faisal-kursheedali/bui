import React from 'react'
import "./css/sideNav.css"
import {AiOutlineMenu} from "react-icons/ai"
import {Link} from "react-router-dom"
import { useData } from '../context/context'

const SideNav = () => {
    const components=["avatar","alert","badge","button","image","input","card","list","toast","navigation","modal","rating","utility"]
    const {setSideNav}=useData();
    return (
        <div className="bui-sidenav doc-sidenav" >
            <div className="bui-sidenav-header">
                <div className="bui-sidenav-header-btn" onClick={() => {
                    setSideNav(false);
                }}>
                    <AiOutlineMenu />
                </div>
                <div className="bui-sidenav-header-logo" onClick={() => {
                    setSideNav(false);
                }}>
                <Link to={"/"} className="bui-link-nostyle home-header-clr-txt">
                    BUI
                </Link>
                </div>
            </div>
            <ul className="bui-sidenav-list">
                <hr className="bui-sidenav-list-hr" />
                <li className="bui-sidenav-list-item bui-txt-weight-bold"  onClick={() => {
                    setSideNav(false);
                }}>
                    <Link to={"/doc/intro"} className="bui-link-nostyle bui-txt-weight-bold">Introduction</Link>
                </li>
                <li className="bui-sidenav-list-item bui-txt-weight-bold"  onClick={() => {
                    setSideNav(false);
                }}>
                    <Link to={"/doc/installation"} className="bui-link-nostyle bui-txt-weight-bold">Installation</Link>
                </li>
                <hr className="bui-sidenav-list-hr" />
                <li className="bui-sidenav-list-item bui-txt-weight-bold bui-txt-weight-bold">
                    Components
                </li>
                {
                    components.map(i=>{
                        return(

                    <li className="bui-sidenav-list-item" onClick={()=>setSideNav(false)} >
                    <Link to={`/doc/${i}`} className='bui-link-nostyle' >
                        {i}
                    </Link>
                    </li>
                        )
                    })
                }
                
            </ul>
        </div>
    )
}

export default SideNav