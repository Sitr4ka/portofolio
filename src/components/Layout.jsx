import React from "react";
import Profile from "./Profile";
import Header from "./Header";
import Footer from "./Footer";
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
        <Footer />
      </main>
    </div>
  );
};

export default Layout;

{
  /* <main className="flex-1 overflow-auto">
  <Header />
  <div className="mx-auto px-6 py-8">{children}</div>
  <Footer />
</main> */
}
