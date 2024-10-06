import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
const SocialMediaList = () => {
    return(
        <div className='icon-container row g-3 mt-4'>
        <h2 className='header2' style={{ fontSize: '1.1rem', textAlign: 'center', fontStyle: 'italic' }}>Sosyal medya</h2>
        <div class='col-3 col-sm-6'>
          <a href='https://www.youtube.com/@yitariss' target='_blank' rel='noopener noreferrer' className='icon1'>
            <FaYoutube />
          </a>
        </div>
        <div class='col-3 col-sm-6'>
          <a href='https://www.instagram.com/yiitbayy' target='_blank' rel='noopener noreferrer' className='icon2'>
            <FaInstagram />
          </a>
        </div>
        <div class='col-3 col-sm-6'>
          <a href='https://www.linkedin.com/in/yigitbayir137/' target='_blank' rel='noopener noreferrer' className='icon3'>
            <FaLinkedin />
          </a>
        </div>
        <div class='col-3 col-sm-6'>
          <a href='https://github.com/yitaris/' target='_blank' rel='noopener noreferrer' className='icon4'>
            <FaGithub />
          </a>
        </div>
      </div>
    )
}
export default SocialMediaList;