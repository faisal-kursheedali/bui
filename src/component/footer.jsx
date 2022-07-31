import React from 'react'
import { Link } from 'react-router-dom'
import "./css/footer.css"
const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="footer-container">
        <div className="footer-brand-detail footer-item">
            <div className="footer-brand-name">
            <span className="footer-logo">
            BUI 
            </span>
             build UI
            </div>
            <div className="footer-brand-desc">
            This is the UI library for web design and web development. BUI was created by faisal.k <strong> @neog camp</strong> with ❤️
            </div>
        </div>

        <div className="footer-link footer-item">
            <div className="footer-head">
                
                Link
            </div>
                <ul className="footer-list">
                    <li className="footer-list-item"><Link to={"/"} className="bui-link-nostyle footer-list-item-link">Home</Link></li>
                    <li className="footer-list-item"><Link to={"/doc/intro"} className="bui-link-nostyle footer-list-item-link">Doc</Link></li>
                </ul>
        </div>
        <div className="footer-link footer-item">
            <div className="footer-head">
                social Media
            </div>
                <ul className="footer-list">
                    <li className="footer-list-item">
                        <a href="https://github.com/faisal-kursheedali" className='bui-link-nostyle footer-list-item-link'>Git hub</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="https://twitter.com/faisal_devop" className='bui-link-nostyle footer-list-item-link'>Twitter</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="https://www.instagram.com/demented_devops/" className='bui-link-nostyle footer-list-item-link'>Instagram</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="https://www.linkedin.com/in/faisal-k-4a02801b2/" className='bui-link-nostyle footer-list-item-link'>Linkedin</a>
                    </li>
                    {/* need to see this later */}
                    <li className="footer-list-item">
                        <a href="https://discordapp.com/users/#1279" className='bui-link-nostyle footer-list-item-link'>Discord</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="mailto:faisal.k.ison@gmail.com" className='bui-link-nostyle footer-list-item-link'>Email</a>
                    </li>
                </ul>
        </div>
        <div className="footer-link footer-item">
            <div className="footer-head">
                projects
            </div>
                <ul className="footer-list">
                <li className="footer-list-item">
                        <a href="#" className='bui-link-nostyle footer-list-item-link'>BUI</a>
                    </li>
                </ul>
        </div>
    </div>
    <div className="footer-sml-center-txt">
    You can get the repo of this bui project from fallowing link of git hub
    <a href="https://github.com/faisal-kursheedali/bui" className="bui-link-underlined footer-sml-txt-link">LINK</a>
    </div>
    </div>
    </>
  )
}

export default Footer