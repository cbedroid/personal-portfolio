import React from "react";
import ProjectCard from "./subcomponents/ProjectCard";

const Projects = () => {
  const dataArr = [
    {
      id: 1,
      name: "E-Commerce Landing Page",
      src: require("../assets/videos/landing-page-video.webm"),
      tech: "HTML / CSS / JS",
      link: "https://cbedroid.github.io/LandingPage/",
    },
    {
      id: 2,
      name: "Software Engineer Survey",
      src: require("../assets/videos/surveypage-video.webm"),
      tech: "HTML / CSS /JS",
      link: "https://cbedroid.github.io/Survey-Page/",
    },
    {
      id: 3,
      name: "TedText - Texting Educational Data ",
      tech: "React JS / Django, Postgres / Docker",
      src: require("../assets/videos/tedtext-web-video.webm"),
      link: null,
    },
    {
      id: 4,
      name: "NoworNever Music Website",
      src: require("../assets/videos/nowornever-web-video.webm"),
      tech: "Python / Django / Docker",
      link: "https://countrycuzzins.herokuapp.com/",
    },
    {
      id: 5,
      name: "Uber Passenger App",
      tech: "Expo / React Native / ReduxJs",
      src: require("../assets/videos/uber-mobile-video.webm"),
      link: "https://github.com/cbedroid/Uber-Clone",
    },
    {
      id: 6,
      name: "Vue Weather App",
      tech: "VueJS ",
      src: require("../assets/videos/vue-weather-video.webm"),
      link: "https://cbedroid.github.io/vue-weather-app/",
    },
  ];

  return (
    <section id="projects" className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto">
        <div className="content-wrapper sm:w-2/3 mx-auto px-4 md:px-0">
          <div className="header text-gray-400 border-b-2 border-orange-500 w-64 pb-2 mb-8">
            <h2 className="text-3xl text-gray-400 font-bold mb-2">My Work</h2>
            <h4>Some of my projects</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            {dataArr.map((data, index) => (
              <ProjectCard key={index} src={data.src} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
