import React, { useMemo } from "react";

import Box from "@mui/material/Box";

import Loader from "../../components/ui/Loader";
import { useGetResumesQuery } from "../../queries";
import Resume from "./components/Resume";
import ResumeTitle from "./components/ResumeTitle";

const ResumePage = () => {
  const resumeQuery = useGetResumesQuery({ username: "cbedroid" });
  const resumeData = resumeQuery.isSuccess && resumeQuery.data.results;

  const resume = useMemo(
    () => resumeData && resumeData.find((resume) => resume.username === "cbedroid"),
    [resumeData],
  );

  return (
    <div className="bg-gray-400 min-h-screen pt-6">
      <div className="container mx-auto px-4">
        {resume && <ResumeTitle color="blue" resume={resume} />}
        <div className="resume-wrapper flex justify-center">
          {resumeQuery.isSuccess && resume ? (
            <Resume file={resume.url} />
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
