import React, { useState } from "react";
import "./ContactMe.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import toast from "react-hot-toast";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: `${process.env.REACT_APP_API_KEY}`,
      authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
      projectId: `${process.env.REACT_APP_PROJECT_ID}`,
      storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
      databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
      messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
      appId: `${process.env.REACT_APP_APP_ID}`,
      measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`,
    };

    initializeApp(firebaseConfig);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.email||!formData.message||!formData.name){
        toast.error("Please Fill All Details");
    }
    else{

    // Get a reference to the database service
    const database = getDatabase();

    // Push the form data to Firebase
    push(ref(database, "formData"), formData)
      .then(() => {
        console.log("Data successfully sent to Firebase");
        // Optionally, you can reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Form Submitted");
      })
      .catch((error) => {
        console.error("Error sending data to Firebase: ", error);
        toast.error("Error in submitting Form");
      });
    }
  };

  return (
    <div className="ContactMe" id="ContactMe">
      <div className="main-contact">
        <div className="title">
          <div>
            <h2>Contact Me</h2>
          </div>
          <div className="contact-basic">
            <p>
              {" "}
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible{" "}
            </p>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit} className="form-main">
            <div className="main-cont">
              <label className="form-label" htmlFor="Name">
                Name
              </label>
              <input
                className="form-input"
                onChange={handleChange}
                value={formData.name}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="main-cont">
              <label className="form-label" htmlFor="Email">
                Email
              </label>
              <input
                className="form-input"
                onChange={handleChange}
                value={formData.email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="main-cont">
              <label className="form-label" htmlFor="Message">
                Message
              </label>
              <textarea
                cols={30}
                rows={10}
                className="form-textarea"
                onChange={handleChange}
                value={formData.message}
                type="text"
                name="message"
                id="message"
                placeholder="Enter Your Message"
              />
            </div>
            <button className="cn-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
