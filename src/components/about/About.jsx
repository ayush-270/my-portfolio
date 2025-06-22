import React from 'react'
import "./About.css"
import ME from "../../assets/me1.jpg"
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis, eos cum iste deleniti illo 
            eveniet eligendi molestias consequatur laudantium nostrum accusantium, error placeat? Laboriosam 
            mollitia sint esse iusto pariatur.
          </p>

          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
 }
 
 export default About