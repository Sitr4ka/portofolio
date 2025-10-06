import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaCode, FaMobile, FaNetworkWired, FaRocket } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectList } from "../constants/projects";
import Card from "../components/ui/Card";
import Techno from "../components/Techno";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simule le chargement complet de la page avant de lancer les animations
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Variants d'animation Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative py-12 space-y-8 flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
      {/* Titre */}
      <motion.div
        className="space-y-4 text-center flex-1"
        variants={itemVariants}
      >
        <h1 className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent lg:invisible">
          Projets Sélectionnés
        </h1>
      </motion.div>

      {/* Display selected projects */}
      <motion.div
        className="flex-2 relative px-12 py-4 grid grid-cols-1 sm:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {ProjectList.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card
              item={project}
              title={project.title}
              technos={project.technos}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Section des technos */}
      <motion.div variants={itemVariants}>
        <Techno />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
