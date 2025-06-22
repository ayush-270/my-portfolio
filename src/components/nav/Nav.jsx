import React from 'react'
import "./Nav.css";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { useState } from 'react';



const Nav = () => {
  const [activeNav,setActiveNav] = useState("#")
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#sevices"
        onClick={() => setActiveNav("#sevices")}
        className={activeNav === "#sevices" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
      >
        <MdMessage />
      </a>
    </nav>
  );
}

export default Nav