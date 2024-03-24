import React from 'react'
import "./Projects.css"
export default function Projects() {
  return (
    <div className='Projects' id='Projects'>

        <div className="main-projects">
        <div className='title1'>
            <div>
                <h2>Projects</h2>
            </div>
            <div className='projects-basic'>
            <p> Here you will find some of the personal projects that I created with each project containing its own github link </p>
            </div>
            </div>
            <div className="projects-main">
                <div className="projects-row">
                    <div className="image">
                        <img src="./images/dopefolio1.png" alt="" />
                    </div>
                    <div className="details">
                        <h3 className="title-para">CryptoQuester</h3>
                        <p className="paragraph1">
                            CryptoQuester is a web app in which one can track all the Cryptocurrencies on various basis and can also see the trending coins. The tech stack used in this project is ReactJs and API along with ChartJs.  
                        </p>
                        <button className='pr-btn'> <a href="https://github.com/Viratbaranwal/CryptoQuester"> Checkout On Github </a></button>
                    </div>
                </div>
                <div className="projects-row">
                    <div className="image">
                        <img src="./images/dopefolio2.png" alt="" />
                    </div>
                    <div className="details">
                        <h3 className="title-para">TicTacToe</h3>
                        <p className="paragraph1">
                            TicTacToe is a web app in which two friends can play the game with a rich UI experince. It also counts the score and announce the overall winner of the game. The tech stack used in this project is HTML, CSS, JavaScript.  
                        </p>
                        <button className='pr-btn'> <a href="https://github.com/Viratbaranwal/TIc-Tac-Toe"> Checkout On Github </a></button>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
  )
}
