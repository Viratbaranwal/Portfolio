import React from 'react'
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className='ContactMe' id='ContactMe'>

        <div className="main-contact">
        <div className='title'>
            <div>
                <h2>Contact Me</h2>
            </div>
            <div className='contact-basic'>
            <p> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
            </div>
            </div>
            <div className="form">
                <form action="#" className='form-main'>
                    <div className="main-cont">
                        <label className='form-label' htmlFor="name">Name</label>
                        <input className='form-input' type="text" name="name" id="101" placeholder='Enter Your Name'/>
                    </div>
                    <div className="main-cont">
                        <label className='form-label' htmlFor="email">Email</label>
                        <input className='form-input' type="email" name="email" id="102" placeholder='Enter Your Email'/>
                    </div>
                    <div className="main-cont">
                        <label className='form-label' htmlFor="message">Message</label>
                        <textarea required cols={30} rows={10} className="form-textarea" type="text" name="message" id="103" placeholder='Enter Your Message'/>
                    </div>
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
        </div>
  )
}
