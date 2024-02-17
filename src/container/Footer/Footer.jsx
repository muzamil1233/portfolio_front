import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants/index";
import { AppWrap, MotionWrap } from "../../Wrapper";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaQuora,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    emailjs
      .send(
        "service_jcvup4k",
        "template_9x4idnr",
        formData,
        "nULCbUGE21ml8lSPw"
      )
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.error("Email Error:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app_footer-cards">
        <a
          className="app_footer-card p-text"
          href="https://github.com/muazimmaqbool"
          target="_blank"
        >
          <FaGithub style={{ color: "#423e3e" }} />
          <p>20k+ Commits</p>
        </a>
        <a
          className="app_footer-card p-text"
          href="https://www.linkedin.com/in/muazim-maqbool"
          target="_blank"
        >
          <FaLinkedin style={{ color: "#0e76a8" }} />
          <p>100k+ Impressions</p>
        </a>
        <a
          className="app_footer-card p-text"
          href="https://www.instagram.com/muazim_codes/"
          target="_blank"
        >
          <FaInstagram style={{ color: "#dd2a7b" }} />
          <p>18k+ Followers</p>
        </a>
        <a
          className="app_footer-card p-text"
          href="https://www.quora.com/profile/Muazim-Maqbool"
          target="_blank"
        >
          <FaQuora style={{ color: "#A82400" }} />
          <p>50k+ Views</p>
        </a>
      </div>
      {!isFormSubmitted ? (
        <div className="app_footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app_footer"),
  "contact",
  "app__whitebg"
);
