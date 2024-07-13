import React from "react";
import { motion } from "framer-motion";
import blogData from "../../constants/blogData";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./blog.scss";

const Blog = () => {
  return (
    <>
      <h2 className="head-text">
      My blogs: Simplifying <span>Coding</span> Concepts
      </h2>
      <div className="app_profiles">
        {blogData.map((item, index) => (
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
                <h2 className="bold-text">
                  {item.title}
                </h2>
                <p className="p-text" >
                  {item.description}
                </p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
      <a href="https://muazim.substack.com/" target="_blank"><button class="btn-24"><span>See More</span></button></a>
    </>
  );
};

export default AppWrap(MotionWrap(Blog, "app_blog"), "blog", "app__whitebg");
