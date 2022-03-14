import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Who Am I?</h1>
            <p className="font-normal text-base leading-relaxed text-gray-600 dark:text-white">
              Hello, my name is Cornelius Brooks, known as Cbedroid. I am an Innovative, task-driven professional Senior Software Engineer with over 7+ years of experience in Full Stack Web Developer,
              fundamental front-end languages, and server-side languages. A creative thinker that brings innovative solutions to help solve any arriving problems. Equipped with a record of success in
              consistently identifying and providing the technological needs of companies through ingenious innovation. Proficient in developing databases such as Postgres SQL, SQL, MySQL, and
              MongoDB, creating servers and databases for functionality and designing, developing restful APIs, creating user interfaces, writing and testing codes, and troubleshooting simple/complex
              issues.
            </p>
          </div>
          <div className="w-full lg:w-8/12 bg-gray-700 ring ring-offset-4 ring-yellow-400 border-gray-300  rounded-md shadow">
            <img className="w-full h-full" src={require("../assets/avatar_full.png")} alt="Programmer illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
