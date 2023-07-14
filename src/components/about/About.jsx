import React from "react";
import "./about.css";
import PROFILE from '../../assets/profile-img.png';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PROFILE} alt="me-about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__card-icon" />
              <h5>Clients</h5>
              <small>55+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__card-icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>Welcome, fellow wanderer of the digital realm, to my virtual abode! I am a weaver of code, a symphony conductor of pixels, and a maestro of web experiences. Step into my world, where imagination meets innovation, and allow me to be your guide through the wonders of the digital universe.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
