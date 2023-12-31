import React from 'react'
import './Intro.css'
import Github from './../../img/github.png'
import LinkedIn from './../../img/linkedin.png'
import Instagram from './../../img/instagram.png'
import Vector1 from './../../img/Vector1.png'
import Vector2 from './../../img/Vector2.png'
import boy from './../../img/boy.png'
// import thumbup from './../img/thumbup.png'
// import Crown from './../img/crown.png'



function Intro() {
  console.log('hahhaahha', Github)
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span> Mustaf Abtidon </span>
          {/* <span>Highly experienced Front-End Developer skilled in web design and mobile app development. 
            Committed to delivering quality work that exceeds expectations</span> */}
            <span>
            As a highly experienced Front-End Developer, I specialize in mobile app development and web design.
            With a passion for creating exceptional user experiences,
            I combine creativity and technical expertise to deliver quality work that not only meets but exceeds expectations.
            </span>

        </div>
         <button className="button i-button">Hire Me</button>
          <div className="i-icons">
            <a href="https://github.com/mustafcode10">
            <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mustaf-abtidon-135620179" >
            <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/mustafdirie1/">
            <img src={Instagram} alt="" />
            </a>
            
          </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
      </div>
    </div>
  )
}

export default Intro