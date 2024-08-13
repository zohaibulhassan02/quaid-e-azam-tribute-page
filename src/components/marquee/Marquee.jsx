import React from "react";

const Marquee = ({ direction, speed, children }) => {
  const marqueeStyle = {
    display: "inline-block",
    animation: `marquee-${direction} ${speed}s linear infinite`,
  };

  return (
    <div className={`marquee-container marquee-${direction}`}>
      <div
        className="marquee-content"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
