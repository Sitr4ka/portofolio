import React from "react";
import Slider from "react-slick";
import { FaCode, FaMobile, FaNetworkWired, FaRocket } from "react-icons/fa";

// Slick carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ServiceData } from "../constants/services";
import Card from "../components/ui/Card";

const Services = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent lg:invisible">
          Mes Services
        </h1>
        <p className="">
          Des solutions complètes pour donner vie à vos projets digitaux
        </p>
      </div>

      {/* Service Card Carrousel */}
      <div className="relative px-12 py-4 ">
        <Slider {...settings}>
          {ServiceData.map((item) => (
            <Card item={item} title={item.title} content={item.description} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
