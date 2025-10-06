import React from "react";
import Profile from "./Profile";
import Header from "./Header";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { Outlet } from "react-router";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Desktop Profile */}
      <div className="hidden lg:block">
        <Profile />
      </div>

      <main className="flex-1 relative">
        <Header />
        <div className="block lg:hidden">
          <Profile />
          <Services />
          <Projects />
          <Contact />
        </div>
        <div className="max-lg:hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
