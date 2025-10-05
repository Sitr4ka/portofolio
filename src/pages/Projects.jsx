import React from "react";
import Slider from "react-slick";
import { FaCode, FaMobile, FaNetworkWired, FaRocket } from "react-icons/fa";

// Slick carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectList } from "../constants/projects";
import Card from "../components/ui/Card";

const Projects = () => {

  return (
    <div className="py-12 space-y-8 flex flex-col">
      <div className="space-y-4 text-center flex-1">
        <h1 className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent lg:invisible">
          Projets Sélectionnés
        </h1>
      </div>

      {/* Display selected project */}
      <div className="flex-2 relative px-12 py-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {ProjectList.map((project, index) => (
          <Card
          key={index}
            item={project}
            title={project.title}
            technos={project.technos}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
