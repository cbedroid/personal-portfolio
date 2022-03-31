import React from "react";
import Chip from "@mui/material/Chip";
import TechAvatars from "./TechAvatars";

const ProjectCard = (props) => {
  return (
    <>
      {props?.src ? (
        <div className="content-container flex flex-col items-between bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-2 border-gray-200 rounded-md">
          <div className="content__header">
            <video src={props?.src} autoPlay loop muted style={{ width: "700px" }} />
            <h4 className="focus:outline-none bg-gray-200 text-gray-800 dark:text-gray-100 text-xl font-bold border-t border-b border-gray-300 mb-3 p-2 py-4">
              {props?.name}
            </h4>
          </div>
          <div className="content__main flex flex-col items-start space-y-6 p-2">
            <TechAvatars data={props?.tech || []} />
            <p className="text-gray-800 dark:text-gray-100">{props?.description}</p>
          </div>
          <div className="content__footer flex justify-end items-baseline p-4 mt-auto  w-full">
            <a disabled={!props?.link} href={props?.link} target="_blank" rel="noopener noreferrer">
              <Chip
                disabled={!props?.link}
                className="font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 rounded-md shadow-sm hover:shadow-xl"
                sx={{ fontSize: "18px", py: 2.5, px: 3 }}
                color="primary"
                size="large"
                label={props?.link ? "View Work" : "Unavailable"}
              />
            </a>
          </div>
        </div>
      ) : (
        <h2 className="text-xl font-bold">Unavailable</h2>
      )}
    </>
  );
};

export default ProjectCard;
