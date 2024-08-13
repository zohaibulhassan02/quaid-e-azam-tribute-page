import React from "react";
import Marquee from "./Marquee";

const MultiSignMarquee = () => {
  return (
    <div>
      {/* Diagonal Marquee - Top-Left to Bottom-Right */}
      <Marquee direction="diagonal-1" speed={12}>
        <span className="marquee-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
          consectetur!
        </span>
      </Marquee>

      {/* Diagonal Marquee - Top-Right to Bottom-Left */}
      <Marquee direction="diagonal-2" speed={12}>
        <span className="marquee-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, rem?
        </span>
      </Marquee>
    </div>
  );
};

export default MultiSignMarquee;
