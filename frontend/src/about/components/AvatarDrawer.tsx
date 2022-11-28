import React from "react";

import Avatar from "@mui/material/Avatar";
import { style } from "@mui/system";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
};

const AvatarDrawer = ({ image, title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center text-gray-100 dark:text-gray-700 w-full">
      <Avatar
        className="border-2 border-gray-900 bg-white"
        src={image}
        sx={{ ...style }}
      />
      <div className="flex flex-col space-y-2 mt-2 text-center">
        <p className="text-2xl font-semibold">{title}</p>
        {subtitle && (
          <p className="text-sm text-gray-300 dark:text-gray-600">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default AvatarDrawer;
