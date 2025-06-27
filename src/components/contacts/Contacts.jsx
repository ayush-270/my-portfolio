import React from 'react'
import "./Contacts.css"
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eyby1zi", "template_u7v4e7j", form.current, {
        publicKey: "6RUzS6bInjVvXeXbF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ayush27.work@gmail.com</h5>
            <a href="mailto:ayush27.work@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FaXTwitter className="contact__option-icon" />
            <h4>X</h4>
            <h5>Ayush Gupta</h5>
            <a href="https://x.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>ayush27.work@gmail.com</h5>
            <a href=" https://wa.me/919355088572" target="_blank">
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id=""
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts