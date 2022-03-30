import React from "react";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material/";
import { PropTypes } from "prop-types";

const SocialIcon = ({ data, iconProps, iconStyle, containerClass }) => {
  const namespace = {
    twitter: <Twitter className={iconStyle} sx={iconProps} />,
    linkedin: <LinkedIn className={iconStyle} sx={iconProps} />,
    github: <GitHub className={iconStyle} sx={iconProps} />,
  };

  const renderIcon = (icon, index) => {
    const iconEl = namespace[icon.name];

    if (iconEl) {
      return (
        <a key={index} className={`${icon.name}-icon`} href={icon.link} target="_blank" rel="noreferrer">
          {iconEl}
        </a>
      );
    }
  };

  return (
    <div className={containerClass}>
      {data?.map((icon, index) => {
        return renderIcon(icon, index);
      })}
    </div>
  );
};

export default SocialIcon;
SocialIcon.prototype = {
  data: PropTypes.array.isRequired,
  iconProps: PropTypes.object,
  iconStyle: PropTypes.string,
  containerClass: PropTypes.string,
};

SocialIcon.defaultProps = {
  iconProps: {},
  iconStyle: "",
  containerClass: "",
};
