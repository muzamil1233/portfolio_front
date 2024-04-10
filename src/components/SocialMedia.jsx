import React from 'react'
import {FaTwitter,FaGithub,FaLinkedin,FaInstagram,FaYoutube} from "react-icons/fa"
import { SiSubstack } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.linkedin.com/in/muazim-maqbool/' target='_blank'>
            <FaLinkedin/>
        </a>
        <a href='https://github.com/muazimmaqbool' target='_blank'>
            <FaGithub/>
        </a>
        <a href='https://twitter.com/muazim_maqbool' target='_blank'>
          <FaTwitter/>  
        </a>
        <a href='https://www.instagram.com/muazim_codes/' target='_blank'>
            <FaInstagram/>
        </a>
        <a href='https://yt.openinapp.co/o3bk1' target='_blank'>
            <FaYoutube/>
        </a>
        {/* <a href="https://www.youtube.com/@Coding_Bytes_" target="_blank">
          <SiSubstack />
        </a> */}
    </div>
  )
}

export default SocialMedia