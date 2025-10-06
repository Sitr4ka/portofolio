import { useWindowSize } from "../hooks/CustomHooks";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { usePageLoad } from "../context/PageLoadContext";

// Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ServiceData } from "../constants/services";
import Card from "../components/ui/Card";

const Services = () => {
  const width = useWindowSize();
  const { isPageLoaded } = usePageLoad();

  let slideNumberToShow = 3;
  if (width <= 600) slideNumberToShow = 1;
  else if (width <= 1200) slideNumberToShow = 2;

  const settings = {
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

  // Animation container + staggered children
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate={isPageLoaded ? "visible" : "hidden"} // ✅ attend le profil
    >
      <div className="space-y-4 text-center">
        <motion.h1
          className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent lg:invisible"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Mes Services
        </motion.h1>
      </div>

      <motion.div
        className="relative px-12 py-4"
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      >
        <Slider {...settings}>
          {ServiceData.map((item, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <Card item={item} title={item.title} content={item.description} />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default Services;
