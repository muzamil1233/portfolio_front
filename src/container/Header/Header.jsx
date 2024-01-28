import React from "react";
import "./Header.scss";

import { motion } from "framer-motion";
import { images } from "../../constants/index";

import AppWrap from "../../Wrapper/AppWrap";
const Header = () => {

  const scaleVariants={
    whileInView:{
      scale:[0,1], //i.e animation from 0 to 1
      opacity:[0,1],
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
  }
  return (
    <div className="app_header app__flex">
      <motion.div
        className="app_header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }} //meaing its going to animate from opactiy 0 to 1 i.e invisible to visible
        transition={{ duration: 0.5 }}
      >
        <div className="app_header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Muazim</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
            {/* <p className="p-text">Freelancer</p> */}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app_header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="profile picture" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        //scaleVariants declared above
        className="app_header-circles"
      >
        {
          [images.js, images.react, images.node].map((item,index)=>(
            <div className="circle-cmp app__flex" key={index}>
              <img src={item} alt="circles"/>
            </div>
          ))
        }
      </motion.div>
    </div>
  );
};

//we are going into Appwraper we are passing Entire Header as a component and we are passing ID name
export default AppWrap(Header, 'home');
