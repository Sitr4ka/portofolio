import React from "react";
import Slider from "react-slick";

// Slick carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profileImg from "../assets/images/profile.jpg";

import { technos } from "../constants/technos";
import { RiTailwindCssFill } from "react-icons/ri";

const Footer = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="mx-auto px-6 py-8">
      <div className="relative px-12 py-4 ">
        <Slider {...settings}>
          {technos.map((techno, index) => (
            <div key={index} className="px-6 py-4 border justify-items-center bg-primary/5 rounded-xl">
              <img src={techno.img} alt="logo"/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Footer;
