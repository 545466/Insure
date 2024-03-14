import React from 'react'
import Pic from '../assets/images/image-intro-desktop.jpg';
import Pic1 from '../assets/images/image-intro-mobile.jpg';
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="human">
            <div className="line"></div>
            <h1>Humanizing <br />your insurance.</h1>
            <p className='get'>Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.</p>
            <p className='view'>VIEW PLANS</p>
        </div>
        <img className='pic' src={Pic} alt="" />
        <img className='pic1' src={Pic1} alt="" />
      </div>
    </>
  )
}

export default Banner
