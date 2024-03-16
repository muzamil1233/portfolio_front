import React from "react";
import { motion } from "framer-motion";
import blogData from "../../constants/blogData";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./blog.scss";

const Blog = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
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
    </>
  );
};

export default AppWrap(MotionWrap(Blog, "app_blog"), "blog", "app__whitebg");
