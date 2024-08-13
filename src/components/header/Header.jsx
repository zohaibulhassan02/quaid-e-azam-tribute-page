import React, { useEffect, useState } from "react";
// import { useRef } from "react";
import "./header.css";
// import CTA from "./CTA";
// import ME1 from "../../assets/me-1.png";
// import quaid from "../../assets/quaid.png";
// import HeaderSocials from "./HeaderSocials";
// import { TbFlagFilled } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";
import img17 from "../../assets/img17.png";
import img18 from "../../assets/img18.png";
import img19 from "../../assets/img19.png";
import img20 from "../../assets/img20.png";
import img21 from "../../assets/img21.png";
import img22 from "../../assets/img22.png";
import img23 from "../../assets/img23.png";
import img24 from "../../assets/img24.png";
import img25 from "../../assets/img25.png";
import img26 from "../../assets/img26.png";
import img27 from "../../assets/img27.png";
import img28 from "../../assets/img28.png";
import img29 from "../../assets/img29.png";
import img30 from "../../assets/img30.png";
import img31 from "../../assets/img31.png";
import img32 from "../../assets/img32.png";
import img33 from "../../assets/img33.png";
import img34 from "../../assets/img34.png";
import img35 from "../../assets/img35.png";

const Header = () => {
  const phrases = [
    "Unity, Faith, Discipline!",
    "Work, Work, and Work!",
    "No Power on Earth Can Undo Pakistan!",
    "We Are the Masters of Our Own Destiny!",
    "Think and Think Again!",
    "The Future Belongs to the Youth!",
    "Be Loyal to Your Country!",
    "Strength Lies in Unity!",
    "The Path to Progress is Through Education!",
    "Justice and Equality for All!",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true); // State to track typing or erasing
  const [isPaused, setIsPaused] = useState(false); // State to manage pause

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let index = typing ? 0 : phrase.length;
    let timerId;

    if (typing) {
      // Typing effect
      timerId = setInterval(() => {
        setDisplayText((prev) => prev + phrase[index]);
        index++;
        if (index === phrase.length) {
          clearInterval(timerId);
          setTyping(false); // Start erasing after typing is complete
          setIsPaused(true); // Set pause state
          setTimeout(() => setIsPaused(false), 2000); // Pause for 2 seconds (change as needed)
        }
      }, 100); // Adjust typing speed
    } else if (!isPaused) {
      // Erasing effect
      timerId = setInterval(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        index--;
        if (index === 0) {
          clearInterval(timerId);
          setTyping(true); // Start typing next phrase
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to next phrase
        }
      }, 50); // Adjust erasing speed
    }

    // Cleanup on component unmount
    return () => clearInterval(timerId);
  }, [currentPhraseIndex, typing, isPaused]);
  // useEffect(() => {
  //   const circleText = document.querySelector(".circle-text");
  //   circleText.innerHTML = circleText.textContent
  //     .split("")
  //     .map(
  //       (char, i) =>
  //         `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
  //     )
  //     .join("");
  // }, []);
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Quaid e Azam</h5> */}
        {/* <h1>Zohaib Ul Hassan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME1} alt="Zohaib Ul Hassan" />
        </div>
        

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
        {/* <h1>MUHAMMAD ALI JINNAH</h1> */}
        {/* <div className="header-bottom">
          <div className="header-bottom-left">
            <h3>December 25, 1876</h3>
            <div className="circle-container">
              <div className="circle-text">
                Quaid e Azam Zindabad ~ Pakistan Paindabad
              </div>
              <div className="center-icon">
                <TbFlagFilled size={60} color="#000" />
              </div>
            </div>
          </div>

          <div className="header-bottom-right">
            <div className="quaid">
              <img src={quaid} alt="Quaid e Azam Muhammad Ali Jinnah" />
            </div>
            <h5>
              Success consists in moving from
              <br /> failure to failure without
              <br /> loss of enthusiasm.
            </h5>
          </div>
        </div> */}

        {/* NEW DESIGN */}

        {/* <h1>Muhammad Ali Jinnah</h1> */}

        <div className="marquee-background">
          <Marquee className="marquee" direction="left" speed={50}>
            <div className="image_wrapper">
              <img src={img1} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img2} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img4} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img5} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img6} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img7} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img8} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img9} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img10} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img11} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img12} alt="" />
            </div>
          </Marquee>

          <Marquee className="marquee" direction="right" speed={50}>
            <div className="image_wrapper">
              <img src={img13} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img14} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img15} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img16} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img17} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img18} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img19} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img20} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img21} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img22} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img23} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img24} alt="" />
            </div>
          </Marquee>

          <Marquee className="marquee" direction="left" speed={50}>
            <div className="image_wrapper">
              <img src={img25} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img26} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img27} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img28} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img29} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img30} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img31} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img32} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img33} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img34} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={img35} alt="" />
            </div>
          </Marquee>

          <div className="content-overlay">
            <h5>Quaid e Azam</h5>
            <h1>Muhammad Ali Jinnah</h1>
            <div class="typewriter">
              <span class="typewriter-text">{displayText}</span>
            </div>
          </div>

          <div className="overlay"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
