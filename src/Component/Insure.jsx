import React, { useState } from 'react'
import Banner from './Banner'
import './Insure.css'
import Different from './Different'
import Footer from './Footer'
const Insure = () => {
  const [menu, setMenu] = useState(true)
  return (
    <>
      <div className="header">
      <img className='logo1' src=".\src\assets\images\logo.svg" alt="" />
        <div className = {menu ? "links" : "active"}>
            <li><a href="#diff">HOW WE WORK</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">ACCOUNT</a></li>
            <div className="views">
            <li><a className='view' href="">VIEW PLANS</a></li>
            </div>
        </div>
        {
          menu ? <svg on
          Click={()=>{setMenu(!menu)}} xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z"/></g></g></svg> : <svg onClick={()=>{setMenu(!menu)}} xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M10.873 9.563l11.314 11.314-1.06 1.06L9.813 10.623z"/><path d="M9.813 20.877L21.127 9.563l1.06 1.06-11.314 11.314z"/></g></g></svg>
        }
      </div>
      <Banner />
      <Different  />
      <Footer />
    </>
  )
}

export default Insure
