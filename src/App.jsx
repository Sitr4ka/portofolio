import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { PageLoadProvider } from "./context/PageLoadContext";

import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <PageLoadProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Services />} />
            <Route path="projets" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PageLoadProvider>
  );
};

export default App;
