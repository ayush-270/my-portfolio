import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
      <a href="http://github.com" target="_blank">
        <FaSquareGithub />
      </a>
      <a href="http://x.com" target="_blank">
        <FaSquareXTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials