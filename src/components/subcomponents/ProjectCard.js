import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      {props?.src ? (
        <div className="project-tile relative group bg-[#efedec] shadow-xl sm:max-w-lg sm:mx-auto rounded-xl p-2 ">
          <div className="hidden group-hover:block absolute left-0 top-0 bg-white text-gray-800  h-full w-full sm:max-w-lg sm:mx-auto rounded-xl p-2 ">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold py-4">{props?.name}</h2>
              <h4 className="text-xl pb-2 text-indigo-700 ">{props?.tech}</h4>
              <a
                disabled={!props?.link}
                className={`font-medium leading-none rounded-l-none ${
                  !props.link ? "bg-gray-300 text-gray-700" : "text-indigo-700  hover:bg-indigo-600 border-2 hover:text-white border-indigo-700"
                }  text-center rounded  uppercase w-44 p-5`}
                href={props?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props?.link ? "View Work" : "Unavailable"}
              </a>
            </div>
          </div>
          <div className="max-w-md mx-auto">
            <h4 tabindex="0" className="focus:outline-none text-gray-800 dark:text-gray-100 text-xl font-bold mb-3 p-2">
              {props?.name}
            </h4>
            <div className="divide-y divide-gray-400/50">
              <video src={props?.src} muted style={{ width: "700px" }} />
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-xl font-bold">Unavailable</h2>
      )}
    </>
  );
};

export default ProjectCard;
