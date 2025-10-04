import { useWindowSize } from "./CustomHooks";
import Slider from "react-slick";

// Slick carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ServiceData } from "../constants/services";
import Card from "../components/ui/Card";

const Services = () => {
  const width = useWindowSize();

  let slideNumberToShow = 3 //Default slide to show value
  if (width <= 600) slideNumberToShow = 1;
  else if (width <= 1200) slideNumberToShow = 2

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideNumberToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
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
