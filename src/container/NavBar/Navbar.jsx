import React, { useState } from "react";
import "./Navbar.scss";

import { images } from "../../constants/index";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

/*app__flex is defined inside App.scss */

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app_navbar_logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app_navbar_links">
        {["home", "work", "skills", "blog", "contact"].map(
          (item, index) => (
            <li className="app__flex p-text" key={index}>
              <div />
              {/*div appears as dot when hover on links see its scss file */}
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <a
        href="#contact"
        rel="noopener noreferrer"
        className="app_navbar-button p-text"
        
      >
        {/* <FaWhatsapp style={{ color: "#25D366" }} /> */}
        <p>Let's Talk</p>
      </a>
      {/*for hambergur menu used inside mobile devices */}
      <div className="app_navbar_menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }} //taking 300px
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "work", "skills",  "blog", "contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
              {/* <a
                 href="#contact"
                // target="_blank"
                rel="noopener noreferrer"
                className="talk_button p-text"
              >
                Let's Talk
              </a> */}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
