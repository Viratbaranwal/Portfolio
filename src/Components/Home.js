import React from 'react'
import "./Home.css"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';
import Scroll from './Scroll';
import {Typewriter } from 'react-simple-typewriter';



export default function Home() {
 
  return (
    <div className='home' id='Home'>
      <div className="side-nav">
        <ul className="side-nav-links">
            <li className="links">

                <a href="https://www.linkedin.com/in/virat-raj/"><FaLinkedin size={30}/></a>
                </li>
            <li className="links">
                <a href="https://github.com/Viratbaranwal"><FaGithub size={30}/></a>
            </li>
            <li className="links">
                <a href="https://instagram.com/virat_baranwal?igshid=ZDdkNTZiNTM="><FaInstagram size={30}/></a>
            </li>
            <li className="links">
                <a href="https://www.codechef.com/users/virat_15"><SiCodechef size={30}/></a>
                </li>
            <li className="links">
                <a href="https://codeforces.com/profile/viratbaranwal"><SiCodeforces size={30}/></a>
                </li>
            <li className="links">
                <a href="https://leetcode.com/viratbaranwal/"><SiLeetcode size={30}/></a>
                </li>
        </ul>
      </div>
      <div className="main-content">
        <h1>HEY, I'M VIRAT RAJ</h1>
        <h1 className='movement'>I am a <span className='move'>
          <Typewriter
                     words={['Student.', 'Developer.', 'Coder.', 'Traveller.']}
                     loop
                     cursor
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={1000}/></span></h1>
                     
      </div>
      <div className="scroll">

        <a href="./#About">
        <Scroll/> </a>
      </div>
    </div>
  )
}
