import React from "react";
import MultiSignMarquee from "./MultiSignMarquee";

import "./marquee.css";

const MarqueeComponent = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <MultiSignMarquee />
    </div>
  );
};

export default MarqueeComponent;
