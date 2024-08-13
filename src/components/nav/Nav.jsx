import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { TbMedal2 } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { GiBugleCall } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <TbMedal2 />
      </a>
      <a
        href="#contributors"
        onClick={() => setActiveNav("#contributors")}
        className={activeNav === "#contributors" ? "active" : ""}
      >
        <IoIosPeople />
      </a>
      <a
        href="#speeches"
        onClick={() => setActiveNav("#speeches")}
        className={activeNav === "#speeches" ? "active" : ""}
      >
        <GiBugleCall />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
