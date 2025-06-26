import React from 'react'
import "./Testimonials.css"
import AVTR from "../../assets/avatar.jpeg"


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar Image" />
          </div>
          <h5 className="client__name">ABC</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam aperiam dolorem quod voluptate, ipsum
            eveniet assumenda nemo dolor natus numquam, voluptates sunt magnam
            fugit ipsa illum placeat quisquam ex.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar Image" />
          </div>
          <h5 className="client__name">ABC</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam aperiam dolorem quod voluptate, ipsum
            eveniet assumenda nemo dolor natus numquam, voluptates sunt magnam
            fugit ipsa illum placeat quisquam ex.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar Image" />
          </div>
          <h5 className="client__name">ABC</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam aperiam dolorem quod voluptate, ipsum
            eveniet assumenda nemo dolor natus numquam, voluptates sunt magnam
            fugit ipsa illum placeat quisquam ex.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar Image" />
          </div>
          <h5 className="client__name">ABC</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam aperiam dolorem quod voluptate, ipsum
            eveniet assumenda nemo dolor natus numquam, voluptates sunt magnam
            fugit ipsa illum placeat quisquam ex.
          </small>
        </article>

      </div>
    </section>
  );
}

export default Testimonials