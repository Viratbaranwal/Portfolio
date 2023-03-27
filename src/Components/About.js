import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div className='About' id='About'>

        <div className="main-about">
        <div className='title'>
            <div>
                <h2>About Me</h2>
            </div>
            <div className='about-basic'>
            <p> Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology </p>
            </div>
            </div>
            <div className="about-content">
                <div className="about-main">
                    <h3 className='about-title'>Get to know about me!</h3>
                    <div className="para">
                        <p className='paragraph'>
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        </p>
                        <p className='paragraph'>
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills then don't hesitate to contact me.
                        </p>
                    </div>
                    <div className="button">
                        <button className='ab-btn'><a href="./#ContactMe">Contact</a></button>
                    </div>
                </div>
                <div className="about-skill">
                    <h3 className='about-title'>My Skills</h3>
                    <div className="skills">
                        <div className="skill-box">C</div>
                        <div className="skill-box">C++</div>
                        <div className="skill-box">DSA</div>
                        <div className="skill-box">HTML</div>
                        <div className="skill-box">CSS</div>
                        <div className="skill-box">BOOTSTRAP</div>
                        <div className="skill-box">TAILWIND CSS</div>
                        <div className="skill-box">JAVASCRIPT</div>
                        <div className="skill-box">REACTJS</div>
                        <div className="skill-box">GIT</div>
                        <div className="skill-box">GITHUB</div>
                    </div>
                </div>
        </div>
      
        </div>
    </div>
  )
}
