import React from "react";
import Avatar from "@mui/material/Avatar";

const AvatarDrawer = (props) => {
  return (
    <div className="flex flex-col items-center text-gray-100 dark:text-gray-700 w-full">
      <Avatar className="border-2 border-gray-900 bg-white" src={props.image} sx={{ ...props?.style }} />
      <div className="flex flex-col space-y-2 mt-2 text-center">
        <p className="text-2xl font-semibold">{props?.title}</p>
        <p className="text-sm text-gray-300 dark:text-gray-600">{props.subtitle}</p>
      </div>
    </div>
  );
};
export default AvatarDrawer;
