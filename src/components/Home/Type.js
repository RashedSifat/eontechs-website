import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developers",
          "IT Specialists",
          "E-Commerce & Web App Developers",
          "Shopify & JS Specialists",
          "Full Stack Web Developers",
          "Tech-Savvy Freelancers",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
