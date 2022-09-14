import React from 'react'
import "./css/nav.css"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useData } from '../context/context'

const Nav = () => {
    const { setSideNav } = useData();
    return (
        <div className="nav-box">
        <nav className='nav-container'>
            <div className="nav-left">
                <div className="nav-menu" onClick={() => {
                    setSideNav(true);
                }}>
                    <AiOutlineMenu />
                </div><Link to={"/"} className="bui-link-nostyle"><span className="nav-left-logo"> BUI</span></Link>
            </div>
            <ul className="nav-list">
                <li className="nav-list-item ">
                    <Link to={"/"} className="nav-link">Home</Link>
                </li>
                <li className="nav-list-item ">
                    <Link to={"/doc/intro"} className="nav-link">Doc</Link>
                </li>
                {/* <li className="nav-list-item nav-list-item-threedot ">
                    <div className="nav-right">
                        <div className="nav-threedot">
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                </li> */}
            </ul>

        </nav>
        </div>
    )
}

export default Nav