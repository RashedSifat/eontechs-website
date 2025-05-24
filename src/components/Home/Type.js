import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineers and IT Specialists",
          "DevOps and Cloud Security Engineers",
          "AWS | Azure | GCP Cloud Engineers",
          "E-Commerce & Full Stack Web Developers",
          "Shopify, Wordpress, Squarespace & JS Specialists",
          "Remote Support Engineers",
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
