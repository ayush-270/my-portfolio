import React from 'react'
import "./Services.css"
import { FaCheck } from "react-icons/fa6";


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* ===================UI/UX Design=================== */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* ===================WEB DEVELOPMENT=================== */}
        <article className="service">
          <div className="service__head">
            <h3>WEB Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* ===================Content Creation=================== */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services