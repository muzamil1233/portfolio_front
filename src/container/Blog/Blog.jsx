import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import blogData,{otherBlogs} from "../../constants/blogData";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./blog.scss";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {blogData.length && (
        <>
          <div className="app_blog-item app__flex">
            <img
              src={blogData[currentIndex].image}
              alt={blogData[currentIndex].name}
            />
            <div className="app_blog-content">
              <p className="p-text">{blogData[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{blogData[currentIndex].name}</h4>
                <h5 className="p-text">{blogData[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app_blog-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? blogData.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === blogData.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app_blog-brands app__flex">
        {otherBlogs.map((blog) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={blog._id}
          >
            <img src={blog.image} alt={blog.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Blog, "app_blog"), "blog", "app_primarybg");
