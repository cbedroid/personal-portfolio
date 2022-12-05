import React from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";

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
