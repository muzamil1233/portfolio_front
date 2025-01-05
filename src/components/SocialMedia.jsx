import React from 'react'
import {FaTwitter,FaGithub,FaLinkedin,FaInstagram,FaYoutube} from "react-icons/fa"
import { SiSubstack } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.linkedin.com/in/muzamil-nabi-1a2435224/' target='_blank'>
            <FaLinkedin/>
        </a>
        <a href='https://github.com/muzamil1233' target='_blank'>
            <FaGithub/>
        </a>
        <a href='https://x.com/muzamil318647' target='_blank'>
          <FaTwitter/>  
        </a>
        <a href='https://www.instagram.com/muzamil_nabii/' target='_blank'>
            <FaInstagram/>
        </a>
        <a href='https://www.youtube.com/@Muzamil_DevHub' target='_blank'>
            <FaYoutube/>
        </a>
        {/* <a href="https://www.youtube.com/@Coding_Bytes_" target="_blank">
          <SiSubstack />
        </a> */}
    </div>
  )
}

export default SocialMedia