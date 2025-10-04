import React from "react";
import Slider from "react-slick";

// Slick carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { technos } from "../constants/technos";
import { useWindowSize } from "../pages/CustomHooks";

const Footer = () => {
  const width = useWindowSize();

  let slideNumber = 7; //Default slide to show value
  if (width <= 600) slideNumber = 2;
  else if (width <= 1200) slideNumber = 4;

  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slideNumber,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    initialSlide: 0,
  };

  return (
    <div className="mx-auto px-6 py-8">
      <div className="relative px-12 py-4 ">
        <Slider {...settings}>
          {technos.map((techno, index) => (
            <div
              key={index}
              className="py-4 border justify-items-center bg-primary/5 rounded-xl"
            >
              <img src={techno.img} alt="logo" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Footer;
