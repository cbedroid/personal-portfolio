import React from "react";

const Hero = () => {
  return (
    <section id="welcome-section" className="bg-gray-800 text-white h-screen" style={{ backgroundImage: `url(${require("../assets/canvas.png")})` }}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="content-wrapper">
          <div className="content__text text-5xl">
            <h1 className="font-raleway">
              Hello, My name is <span className="text-[#A61F5B] font-semibold">Cornelius Brooks</span>.
            </h1>
            <h1 className="font-raleway">I'm a full-stack web developer.</h1>
          </div>
        </div>
        <a className="bg-transparent hover:bg-[#04BDC4] font-raleway border-2 border-white text-center p-3 px-6 mt-10 w-64" href="#projects">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
