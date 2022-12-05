import React from "react";

import { CircularProgress } from "@mui/material";
import classNames from "classnames";

type Props = {
  size?: number | string;
  className?: string;
  color?:
    | "primary"
    | "success"
    | "secondary"
    | "info"
    | "warning"
    | "error"
    | "inherit";
};

const Loader = ({ size = 75, color = "primary", className }: Props) => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center place-items-center w-full",
        {
          className,
        },
      )}
    >
      <CircularProgress color={color} size={size} />
    </div>
  );
};

export default Loader;
