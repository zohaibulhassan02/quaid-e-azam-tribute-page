import React from "react";
import Marquee from "react-fast-marquee";
import "./quotes.css";

const Quotes = () => {
  return (
    <section id="quotes" style={{ background: "#0fff50" }}>
      <Marquee gradient={true} gradientColor="#000" speed={100}>
        <h1>
          Think a hundred times before you take a decision, but once that
          decision is taken, stand by it as one man.
        </h1>
      </Marquee>
    </section>
  );
};

export default Quotes;
