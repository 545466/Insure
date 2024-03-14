import React, { useState } from 'react'
import social from './Social'

const Footer = () => {
  const[icon, seticon] = useState(social)
  return (
    <>
      <div className="footer">
        <div className="insure">
            {/* <h1>INSURE</h1> */}
                <img className='logo' src=".\src\assets\images\logo.svg" alt="" />
                <div className="socials">
                {
                    icon.map((socials) =>(
                        <div className='social'>
                             <img key={socials.id} src={socials.img} alt="" />
                         </div>
                    ))
                }
                </div>
        </div>
        <div className='lines'></div>
        <div className="footer_links">
            <div className="footer_link">
                <h1>OUR COMPANY</h1>
                <div className="link">
                <a href="">HOW WE WORK</a>
                <a href="">WHY INSURE?</a>
                <a href="">VIEW PLANS</a>
                <a href="">REVIEWS</a>
                </div>
            </div>
            <div className="footer_link">
                <h1>HELP ME</h1>
                <div className="link">
                <a href="">FAQ</a>
                <a href="">TERMS OF USE</a>
                <a href="">PRIVACY POLICY</a>
                <a href="">COOKIES</a>
                </div>
            </div>
            <div className="footer_link">
                <h1>CONTACT</h1>
                <div className="link">
                <a href="">SALES</a>
                <a href="">SUPPORT</a>
                <a href="">LIVE CHAT</a>
                </div>
            </div>
            <div className="footer_link">
                <h1>OTHERS</h1>
                <div className="link">
                <a href="">CAREERS</a>
                <a href="">PRESS</a>
                <a href="">LICENSES</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
