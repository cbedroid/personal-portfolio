import React from "react";

import About from "../about/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";

const HomePage = () => {
  return (
    <div className="mt-8">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
