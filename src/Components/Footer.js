import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin,FaRegCopyright } from 'react-icons/fa';
import "./Footer.css"

export default function Footer() {
    const today = new Date();
  return (
        <footer className='Footer'>
            <div className="footer-main">
                <div className="main-above">
                    <div className="main-above-right">
                    <h2 className="social">
                            <span>Social</span>
                        </h2>
                        <div className="social-icons">
                            <a href="./"><FaGithub/></a>
                            <a href="./"><FaInstagram/></a>
                            <a href="./"><FaLinkedin/></a>
                        </div>
                    </div>
                    <div className="main-above-left">
                        <h2 className="left-heading">Virat Raj</h2>
                        <p className="left-des">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                    </div>
                </div>
                <div className="main-below">
                    <p><FaRegCopyright/> Copyright {today.getFullYear()}. Made By Virat Raj </p>
                </div>
            </div>

        </footer>
  )
}
