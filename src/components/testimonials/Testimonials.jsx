import React from 'react'
import "./Testimonials.css"
import AVTR from "../../assets/avatar.jpeg"


// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR,
    name: "ABC",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consequatur ipsum deserunt fugit debitis. Nostrum odit laborum excepturi consectetur aliquam earum, nihil dicta minus, enim culpa labore quaerat quos quis!",
  },
  {
    avatar: AVTR,
    name: "ABC",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consequatur ipsum deserunt fugit debitis. Nostrum odit laborum excepturi consectetur aliquam earum, nihil dicta minus, enim culpa labore quaerat quos quis!",
  },
  {
    avatar: AVTR,
    name: "ABC",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consequatur ipsum deserunt fugit debitis. Nostrum odit laborum excepturi consectetur aliquam earum, nihil dicta minus, enim culpa labore quaerat quos quis!",
  },
  {
    avatar: AVTR,
    name: "ABC",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consequatur ipsum deserunt fugit debitis. Nostrum odit laborum excepturi consectetur aliquam earum, nihil dicta minus, enim culpa labore quaerat quos quis!",
  },
];


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar Image" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials