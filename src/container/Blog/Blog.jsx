import React from "react";
import { motion } from "framer-motion";
import blogData from "../../constants/blogData";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./blog.scss";
import { Tilt } from 'react-tilt'
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	//scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Blog = () => {
  return (
    <>
      <h2 className="head-text">
        My blogs: Simplifying <span>Coding</span> Concepts
      </h2>
      <div className="app_profiles">
        {blogData.map((item, index) => (
         <Tilt options={defaultOptions}>
           <a href={item.link} target="_blank">
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app_profile-item"
              key={index}
            >
              <img src={item.imgurl} alt="about images" />
              <div className="blog_text">
                <h2 className="bold-text">{item.title}</h2>
                <p className="p-text">{item.description}</p>
              </div>
            </motion.div>
          </a>
         </Tilt>
        ))}
      </div>
      <a href="https://muazim.substack.com/" target="_blank">
        <button className="seemore">See More Articles</button>
      </a>
    </>
  );
};

export default AppWrap(MotionWrap(Blog, "app_blog"), "blog", "app__whitebg");
