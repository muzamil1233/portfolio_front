import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import{Tooltip} from "react-tooltip";

import { AppWrap,MotionWrap} from  "../../Wrapper";
import "./skills.scss"
import skillsList from "../../constants/skillsList"
import experiences from "../../constants/experiences";
import { BsArrowUpRight } from 'react-icons/bs';



const Skills = () => {
  // const [skills, setSkills] = useState([]);
  return (
   <>
   <h2 className="head-text">Skills & Experties</h2>
   <div className="app_skills-container">
        <motion.div className="app_skills-list">
          {skillsList.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app_skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex skill_circle"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app_skills-exp">
          {experiences.map((exp) => (
            <motion.div
              className="app_skills-exp-item"
              key={exp.item}
            >
              <motion.div className="app_skills-exp-works">
                {exp?.works.map((work) => (
                  <a href={work.link} target='_blank'>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app_skills-exp-work"
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name} <BsArrowUpRight /></h4>
                      <p className="p-text">{work.description}</p>
                    </motion.div>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
   </>
  )
}
//export default Skills;
//export default AppWrap(Skills,'skills')
//here we will wrap our component inside two higher order components i.e AppWrap and MotionWrap
export default AppWrap(
  MotionWrap(Skills,'app_skills'),
  'skills',
  'app__primarybg'
)