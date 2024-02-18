import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import {AppWrap,MotionWrap} from "../../Wrapper";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer",
    imgurl: images.about01,
  },
  {
    title: "Web Designer",
    description: "I am a good web designer",
    imgurl: images.about02,
  },
  {
    title: "UI/UX",
    description: "I am a good ui/ux designer",
    imgurl: images.about03,
  },
  {
    title: "Logo Designer",
    description: "I am a good logo designer",
    imgurl: images.about04,
  },
];

const About = () => {
  return (
    <>
       <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
        <div className="app_profiles">
          {abouts.map((item, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app_profile-item"
              key={index}
            >
              <img src={item.imgurl} alt="about images" />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {item.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
     
    </>
  ); 
};

//export default AppWrap(About,'about');
//here we will wrap our component inside two higher order components i.e AppWrap and MotionWrap
export default AppWrap(
  MotionWrap(About,'app_about'),
  'about',
  'app__primarybg'
)
