import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="projets"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
