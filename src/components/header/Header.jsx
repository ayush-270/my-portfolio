import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/download.jpeg"


const Header = () => {
  return (
    <header>
      <div className="conatiner header__container">
        <h5>Hello, I'm </h5>
        <h1>Ayush Gupta</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>   
  )
}

export default Header