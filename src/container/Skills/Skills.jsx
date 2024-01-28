import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import{Tooltip} from "react-tooltip";

import { AppWrap,MotionWrap} from  "../../Wrapper";
import "./skills.scss"
import skillsList from "../../constants/skillsList"
import experiences from "../../constants/experiences";

const Skills = () => {
  // const [skills, setSkills] = useState([]);
  return (
   <>
   <h2 className="head-text">Skills & Experiences</h2>
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
                className="app__flex"
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
              key={exp.year}
            >
              <div className="app_skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app_skills-exp-works">
                {exp?.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app_skills-exp-work"
                      data-tip //use full when you have tooltips
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.description}
                    </Tooltip>
                  </>
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
  'app__whitebg'
)