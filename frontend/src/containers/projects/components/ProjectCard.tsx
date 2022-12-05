import React from "react";

import { Card, CardContent, CardMedia } from "@mui/material";
import Chip from "@mui/material/Chip";
import classNames from "classnames";
import tw from "tailwind-styled-components";

import { ProjectEntity } from "../../../types";
import TechAvatars from "./TechAvatars";

const CardFooter = tw.div`
 flex
 justify-end
 p-4
 mt-auto
 w-full
`;
CardFooter.displayName = "CardFooter";

type project = {
  project: ProjectEntity;
};
const ProjectCard = ({ project }: project) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="video"
        width={700}
        src={project.video}
        autoPlay={true}
        controls
        muted
        loop
      />
      <h4 className="focus:outline-none bg-gray-200 text-gray-900 dark:text-gray-100 text-xl font-bold border-t border-b border-gray-300 p-2 py-4">
        {project?.name}
      </h4>
      <CardContent className="flex flex-col items-start space-y-4">
        <TechAvatars technologies={project.technology} project={project.name} />
        <p className="text-gray-800 dark:text-gray-100">{project?.description}</p>
      </CardContent>
      <CardFooter>
        <a
          className={classNames({
            "opacity-75 pointer-events-none": !project?.link,
          })}
          href={project?.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            pointerEvents: !!project?.link ? "auto" : "none",
          }}
        >
          <Chip
            disabled={!project?.link}
            className="font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 rounded-md shadow-sm hover:shadow-xl"
            sx={{ fontSize: "18px", py: 2.5, px: 3 }}
            color="primary"
            label={project?.link ? "View Work" : "Unavailable"}
          />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
