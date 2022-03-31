import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

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
