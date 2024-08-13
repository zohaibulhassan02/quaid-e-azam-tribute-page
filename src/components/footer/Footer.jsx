import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <a href="#" className="footer__logo">
          ZOHAIB
        </a>

        <div className="footer__socials">
          <a href="https://web.facebook.com/imzohaibulhassan" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/imzohaibulhassan" target="_blank">
            <FiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/zohaib-ul-hassan"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/zohaibulhassan02" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.fiverr.com/zohaib__hassan" target="_blank">
            <TbBrandFiverr />
          </a>
          <a href="https://leetcode.com/u/WSS0pcKKSI" target="_blank">
            <SiLeetcode />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; ZOHAIB | All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
