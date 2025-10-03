import React from "react";
import Profile from "./Profile";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <aside className="lg:w-96 bg-card border-l place-content-center border-border lg:sticky lg:top-0 lg:h-screen flex flex-col">
        <Profile />
      </aside>
      <main className="relative flex-1 overflow-auto">
        <Header />
        <div className="mx-auto px-6 py-8">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
