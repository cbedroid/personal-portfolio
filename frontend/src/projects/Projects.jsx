import React from "react";

import { Skeleton } from "@mui/material";
import ProjectCard from "projects/components/ProjectCard";
import { useGetProjectsQuery } from "queries";

const Projects = () => {
  const projectsQuery = useGetProjectsQuery();
  const projects = projectsQuery.isSuccess && projectsQuery.data.results;

  return (
    <section id="projects" className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto">
        <div className="content-wrapper sm:w-2/3 mx-auto px-4 md:px-0">
          <div className="header text-gray-400 border-b-2 border-orange-500 w-64 pb-2 mb-8">
            <h2 className="text-3xl text-gray-200 font-bold mb-2">My Work</h2>
            <h4>Recent projects</h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
            {projectsQuery.isSuccess
              ? projects.map((project, index) => (
                  <ProjectCard
                    key={`project-${project.name}-${index}`}
                    project={project}
                  />
                ))
              : [...Array(4)].map((_, i) => (
                  <div key={`project-${i}`}>
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={"100%"}
                      height={280}
                      sx={{ margin: 0 }}
                    />
                    <div className="flex gap-1 my-1">
                      <Skeleton variant="circular" width={50} height={40} />
                      <Skeleton variant="circular" width={50} height={40} />
                      <Skeleton variant="circular" width={50} height={40} />
                    </div>
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={200}
                      sx={{ margin: 0 }}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
