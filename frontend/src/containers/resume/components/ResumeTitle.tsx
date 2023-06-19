import React, { CSSProperties } from "react";

import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import { DateTime } from "luxon";
import tw from "tailwind-styled-components";

import { ResumeEntity } from "../../../types";

type TitleProp = {
  color?: string;
};

const TitleContainer = tw.div<TitleProp>`
md:flex
md:items-center
md:justify-between
self-center
bg-white
border-t-4
${(props) => props.color && `border-${props.color}-700`}
rounded-md
my-4
p-4
mb-4
lg:mx-52
`;

TitleContainer.displayName = "TitleContainer";

type Props = {
  color?: CSSProperties["color"];
  resume: ResumeEntity;
};
const ResumeTitle = ({ color = "blue", resume }: Props) => {
  return (
    <TitleContainer color={color}>
      <h2 className="text-3xl text-gray-600 text-center font-bold">Resume</h2>
      <div className="flex justify-between items-center space-x-4 md:w-2/3  mt-4 md:mt-0">
        <Button
          className="text-white font-bold"
          color="primary"
          variant="contained"
          href={resume.url}
          startIcon={<DownloadIcon />}
          onClick={() => null}
        >
          Download
        </Button>
        <div className="md:flex text-center text-gray-600 font-semibold">
          <p>last modified:</p>
          <p className="text-gray-400 ml-2">
            {DateTime.fromISO(resume.updated_at).toFormat("MMMM d, yyyy")}
          </p>
        </div>
      </div>
    </TitleContainer>
  );
};

export default ResumeTitle;
