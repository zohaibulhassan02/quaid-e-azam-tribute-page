import React from "react";
import "./about.css";
import QUAID from "../../assets/quaid e azam.png";
import { GiPublicSpeaker } from "react-icons/gi";
import { GiCrossedChains } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { GiShintoShrineMirror } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know More</h5>
      <h2>About Quaid e Azam</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={QUAID} alt="Quaid e Azam Muhammad Ali Jinnah" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiPublicSpeaker className="about__card-icon" />
              <h5>Leadership</h5>
              <small>Founder of Pakistan</small>
            </article>

            <article className="about__card">
              <GiCrossedChains className="about__card-icon" />
              <h5>Independence</h5>
              <small>Guided Pakistan to Freedom</small>
            </article>

            <article className="about__card">
              <FaEye className="about__card-icon" />
              <h5>Vision</h5>
              <small>Advocate for Muslim Rights</small>
            </article>

            <article className="about__card">
              <GiShintoShrineMirror className="about__card-icon" />
              <h5>Legacy</h5>
              <small>Father of the Nation</small>
            </article>
          </div>

          <p>
            Quaid-e-Azam Muhammad Ali Jinnah was the visionary leader who
            founded Pakistan in 1947, securing a homeland for Muslims in the
            Indian subcontinent. His enduring legacy as the Father of the Nation
            is marked by his principles of unity, faith, and discipline, which
            continue to inspire Pakistanis today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
