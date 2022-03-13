import React from "react";
import ProjectCard from "./subcomponents/ProjectCard";

const Projects = () => {
  const dataArr = [
    {
      id: 1,
      name: "E-Commerce Landing Page",
      src: require("../assets/videos/landing-page-video.webm"),
      tech: "HTML, CSS, JS",
      link: "https://cbedroid.github.io/LandingPage/",
    },
    {
      id: 2,
      name: "Software Engineer Survey",
      src: require("../assets/videos/surveypage-video.webm"),
      tech: "HTML, CSS, JS",
      link: "https://cbedroid.github.io/Survey-Page/",
    },
    {
      id: 3,
      name: "TedText SMS Learning",
      tech: "React JS / Django",
      src: require("../assets/videos/tedtext-web-video.webm"),
      link: null,
    },
    {
      id: 4,
      name: "NoworNever Music Website",
      src: require("../assets/videos/nowornever-web-video.webm"),
      tech: "Python/Django",
      link: "https://countrycuzzins.herokuapp.com/",
    },
    {
      id: 5,
      name: "Uber Passenger App",
      tech: "Expo/React Native , ReduxJs",
      src: require("../assets/videos/uber-mobile-video.webm"),
      link: "https://github.com/cbedroid/Uber-Clone",
    },
  ];

  return (
    <section id="projects" className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto">
        <div className="content-wrapper sm:w-2/3 mx-auto">
          <div className="header text-gray-400 border-b-2 border-orange-500 w-64 pb-2 mb-8">
            <h2 className="text-3xl text-gray-400 font-bold mb-2">My Work</h2>
            <h4>Some of my projects</h4>
          </div>
          <div className="grid grid-cols-2 gap-8 mx-auto">
            {dataArr.map((data) => (
              <ProjectCard src={data.src} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
