import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineering & IT Solutions Specialists",
          "AI & Automation Engineers",
          "DevOps Engineers & Cloud Engineers",
          "Full-Stack Web & E-Commerce Developers",
          "Remote IT Support & Systems Engineers",
          "Tech-Savvy Freelance Professionals"
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
