import React, { useMemo } from "react";

import Box from "@mui/material/Box";

import Loader from "../components/ui/Loader";
import { useGetResumesQuery } from "../queries";
import Resume from "../resume/Resume";
import ResumeTitle from "../resume/ResumeTitle";

const ResumePage = () => {
  const resumeQuery = useGetResumesQuery({ username: "cbedroid" });
  const resumeData = resumeQuery.isSuccess && resumeQuery.data.results;

  const resume = useMemo(
    () => resumeData && resumeData.find((resume) => resume.username === "cbedroid"),
    [resumeData],
  );

  return (
    <div className="bg-gray-400 min-h-screen">
      <div className="container mx-auto pt-8 px-2">
        {resume && <ResumeTitle color="blue" resume={resume} />}
        <div className="resume-wrapper mx-auto">
          {resumeQuery.isSuccess && resume ? (
            <Resume
              className={"flex flex-col items-center content-center"}
              file={resume.url}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "calc(100vh - 150px)",
                backgroundColor: "white",
              }}
            >
              <Loader size={125} />
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
