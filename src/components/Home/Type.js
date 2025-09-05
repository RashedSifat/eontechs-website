import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineers",
          "IT Solutions Specialists",
          "AI & Automation Engineers",
          "DevOps & Cloud Engineers",
          "Web & eCommerce Developers",
          "Tech-Savvy Professionals"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
        cursor: "_"
      }}
    />
  );
}

export default Type;
