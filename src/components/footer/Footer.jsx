import React from 'react'
import "./Footer.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ayush
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expereince</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://x.com">
          <FaSquareXTwitter />
        </a>

        <a href="https://instagram.com">
          <FaInstagram />
        </a>

        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ayush Gupta. All Rights Reserved</small>
      </div>
    </footer>
  );
}

export default Footer