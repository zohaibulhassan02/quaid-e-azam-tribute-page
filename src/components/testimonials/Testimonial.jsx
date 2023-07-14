import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "I can't express enough how satisfied I am with the exceptional service provided by this company. From the moment I reached out to them, they displayed professionalism, expertise, and a genuine desire to help. They listened attentively to my needs and tailored their solutions accordingly, resulting in outstanding results. I highly recommend their services to anyone seeking top-notch assistance!",
  },
  {
    avatar: AVTR2,
    name: "Ran Sagell",
    review:
    "I had the pleasure of working with this company on a complex project, and they exceeded my expectations in every way. Their team demonstrated a remarkable level of skill, knowledge, and creativity throughout the entire process. They not only delivered the project on time but also provided valuable insights and suggestions that greatly improved the final outcome. I am incredibly impressed and grateful for their outstanding service.",
  },
  {
    avatar: AVTR3,
    name: "Johnson Williams",
    review:
    "I've been a loyal client of this company for several years, and they continue to impress me with their unwavering commitment to customer satisfaction. Their team is highly professional, reliable, and always goes above and beyond to meet my needs. Their expertise in their field is unparalleled, and I have complete trust in their ability to handle any project. I wholeheartedly recommend their services to anyone looking for a trusted partner.",
  },
  {
    avatar: AVTR4,
    name: "Maria Gomez",
    review:
    "I had the pleasure of working with this company for a recent event, and I cannot praise them enough for their outstanding service. From the initial planning stages to the execution of the event, they demonstrated exceptional organization, attention to detail, and professionalism. Their team's creativity, expertise, and dedication made them an absolute pleasure to work with. I would highly recommend their services for any event or occasion.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
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
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
