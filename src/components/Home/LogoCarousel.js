import React from "react";
import logo1 from "../../Assets/logo.png";
import logo2 from "../../Assets/logo.png";
import logo3 from "../../Assets/logo.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo1,
  logo2,
  logo3
];

const LogoCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {logos.map((image, index) => (
          <img key={index} src={image} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
