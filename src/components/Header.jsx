import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="invisible border-b border-border lg:bg-card/50 bg-card/95 backdrop-blur-sm fixed lg:sticky w-full top-0 z-10 lg:visible">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center  lg:justify-center lg:items-center ">
          <NavLink
            to="/" 
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/projets"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            Projets
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
