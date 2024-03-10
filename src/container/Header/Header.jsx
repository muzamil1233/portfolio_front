import React, { useEffect, useRef } from "react";
import "./Header.scss";

import { animate, motion } from "framer-motion";
import { images } from "../../constants/index";

import AppWrap from "../../Wrapper/AppWrap";
const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1], //i.e animation from 0 to 1
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const linecount = useRef(null);
  const projectscount = useRef(null);
  const coffeecount = useRef(null);

  const animationLinesCount = () => {
    animate(0, 100, {
      duration: 1, //means 1second
      onUpdate: (value) => (linecount.current.textContent = value.toFixed()), //toFixed() will only give whole numbe like this 1,2,3,4... not like this 1.1213,2.221,.
    });
  };
  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 1, //means 1second
      onUpdate: (value) =>
        (projectscount.current.textContent = value.toFixed()), //toFixed() will only give whole numbe like this 1,2,3,4... not like this 1.1213,2.221,.
    });
  };
  const animationCoffeeCount = () => {
    animate(0, 1000, {
      duration: 1,
      onUpdate: (value) => (coffeecount.current.textContent = value.toFixed()),
    });
  };

  //handle wave animation
  const waveRef = useRef(null);

  useEffect(() => {
    const waveAnimation = animate(waveRef.current, {
      rotate: [0, 20, -10, 10, 0],
      transition: { duration: 2, loop: Infinity, repeatDelay: 3 },
    });

    return () => waveAnimation.stop();
  }, []);
  return (
    <div className="app_header app__flex">
      <motion.div
        className="app_header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }} //meaing its going to animate from opactiy 0 to 1 i.e invisible to visible
        transition={{ duration: 0.5 }}
      >
        <div className="app_header-badge">
          <div className="badge-cmp app__flex">
            <motion.span
            ref={waveRef}
            role="img"
            aria-label="wave-hand"
            className="wave-hand"
              whileInView={{ rotate: [0, 20, -10, 10, 0] }}
              transition={{ duration: 2, loop: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Muazim</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app_header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {/* <img src={images.profile} alt="profile picture" /> */}
        <div className="profile_image"></div>
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
        className="numbers_animation"
      >
        <div className="numbers_header-badge">
          <div className="data app__flex">
            <p>
              <motion.span
                whileInView={animationLinesCount}
                ref={linecount}
              ></motion.span>
              K+
            </p>
            <p>lines of code</p>
          </div>
          <div className="data app__flex">
            <p>
              <motion.span
                whileInView={animationProjectsCount}
                ref={projectscount}
              ></motion.span>
              +
            </p>
            <span>Projects done</span>
          </div>
          <div className="data app__flex">
            <p>
              <motion.span
                whileInView={animationCoffeeCount}
                ref={coffeecount}
              ></motion.span>
              +
            </p>
            <span>Cups of coffee drunk</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

//we are going into Appwraper we are passing Entire Header as a component and we are passing ID name
export default AppWrap(Header, "home");
