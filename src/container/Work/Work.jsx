import React, { useState, useEffect } from "react";
import "./work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import projectsdata, { moreprojects } from "../../constants/projectsdata";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Projects</span> section
      </h2>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app_work-portfolio"
      >
        {projectsdata.map((work, index) => (
          <div className="app_work-item app__flex" key={index}>
            <div className="app_work-img app__flex">
              <img src={work.image} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app_work-hover app__flex"
              >
                <a href={work.url} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.code} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app_work-content app__flex">
              <a href={work.url} target="_blank" rel="noreferrer">
                <h4 className="bold-text">{work.title}</h4>
              </a>
              <p className="p-text description" style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="more_projects"
      >
        <p className="bold-text">More Projects</p>

        <div className="more_projects_list">
          {moreprojects.map((item) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={item._id}
            >
              <div className="more_projects_title">
                {item.name}
                <BsArrowUpRight />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

//export default AppWrap(Work, "work");
//here we will wrap our component inside two higher order components i.e AppWrap and MotionWrap
export default AppWrap(MotionWrap(Work, "app_works"), "work", "app__whitebg");
