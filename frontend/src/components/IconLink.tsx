import React from "react";

import { GitHub, LinkedIn, Twitter } from "@mui/icons-material/";
import { SxProps } from "@mui/system";

type Props = {
  icon: string;
  link: string;
  iconProps?: SxProps;
  iconStyle?: string;
  className: string;
};

const IconLink = ({ icon, link, iconProps = {}, iconStyle = "", className }: Props) => {
  const IconMap = {
    twitter: <Twitter className={iconStyle} sx={iconProps} />,
    linkedin: <LinkedIn className={iconStyle} sx={iconProps} />,
    github: <GitHub className={iconStyle} sx={iconProps} />,
  };

  // @ts-ignore
  const iconEl = IconMap[icon];

  return (
    <div className={className}>
      {iconEl && (
        <a className={`${icon}-icon`} href={link} target="_blank" rel="noreferrer">
          {iconEl}
        </a>
      )}
    </div>
  );
};

export default IconLink;
