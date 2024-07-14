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
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { IoIosSend } from "react-icons/io";

const validationScheme = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Should only contain letters")
    .required("Enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Enter your message"),
});
const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => {
      setLoading(true);
      emailjs
        .send(
          "service_jcvup4k",
          "template_9x4idnr",
          values,
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
    },
  });

  return (
    <>
      <h2 className="head-text"> Let's <span>connect</span> and <span>code</span> something <span>extraordinary</span></h2>
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
          <p>45k+ Followers</p>
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
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="warning-text">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Email Address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="warning-text">{formik.errors.email}</div>
            ) : null}
          </div>
          <div  className="app__flex">
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={formik.values.message}
              name="message"
              onChange={formik.handleChange}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="warning-text">{formik.errors.message}</div>
            ) : null}
          </div>
          {/* <button
            type="button"
            className="p-text"
            onClick={formik.handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button> */}
          <button className="sendMessageBtn" type="button" onClick={formik.handleSubmit}>{!loading ? "Send Message" : "Sending..."}</button>
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
  "app__primarybg"
);
