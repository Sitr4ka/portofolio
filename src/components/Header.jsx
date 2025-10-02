import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex gap-8">
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
