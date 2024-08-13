import React from "react";
import Marquee from "react-fast-marquee";
import con1 from "../../assets/con-1.png";
import con2 from "../../assets/con-2.png";
import con3 from "../../assets/con-3.png";
import con4 from "../../assets/con-4.png";
import con5 from "../../assets/con-5.png";
import con6 from "../../assets/con-6.png";
import con7 from "../../assets/con-7.png";
import con8 from "../../assets/con-8.png";
import con9 from "../../assets/con-9.png";
import con10 from "../../assets/con-10.png";
import con11 from "../../assets/con-11.png";
import con12 from "../../assets/con-12.png";
import con13 from "../../assets/con-13.png";
import con14 from "../../assets/con-14.png";
import con15 from "../../assets/con-15.png";
import con16 from "../../assets/con-16.png";
import con17 from "../../assets/con-17.png";
import con18 from "../../assets/con-18.png";
import con19 from "../../assets/con-19.png";
import con20 from "../../assets/con-20.png";
import con21 from "../../assets/con-21.png";
import con22 from "../../assets/con-22.png";
import con23 from "../../assets/con-23.png";
import con24 from "../../assets/con-24.png";
import con25 from "../../assets/con-25.png";
import con26 from "../../assets/con-26.png";
import con27 from "../../assets/con-27.png";
import con28 from "../../assets/con-28.png";
import con29 from "../../assets/con-29.png";
import con30 from "../../assets/con-30.png";
import con31 from "../../assets/con-31.png";
import "./Contributors.css";

const Contributors = () => {
  return (
    <section id="contributors">
      <h5>Get to More</h5>
      <h2>Major Contributors</h2>

      <div className="container contributors-container">
        <div className="contributors-left">
          <h1>Major Contributors to Quaid-e-Azam's Vision</h1>
          <p>
            The journey to Pakistan's independence was not a solitary effort.
            Quaid-e-Azam Muhammad Ali Jinnah was supported by a group of
            dedicated and visionary leaders who played pivotal roles in shaping
            the nation. This section honors those key contributors whose
            efforts, wisdom, and sacrifices were instrumental in the creation of
            Pakistan.
          </p>
        </div>
        <div className="contributors-right">
          <Marquee className="con-marquee" direction="up" speed={50}>
            <div className="con_image_wrapper">
              <img src={con1} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con2} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con3} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con4} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con5} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con6} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con7} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con8} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con9} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con10} alt="" />
            </div>
          </Marquee>

          <Marquee className="con-marquee" direction="down" speed={50}>
            <div className="con_image_wrapper">
              <img src={con11} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con12} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con13} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con14} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con15} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con16} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con17} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con18} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con19} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con20} alt="" />
            </div>
          </Marquee>

          <Marquee className="con-marquee" direction="up" speed={50}>
            <div className="con_image_wrapper">
              <img src={con21} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con22} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con23} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con24} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con25} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con26} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con27} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con28} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con29} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con30} alt="" />
            </div>
            <div className="con_image_wrapper">
              <img src={con31} alt="" />
            </div>
          </Marquee>

          {/* <div className="overlay"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
