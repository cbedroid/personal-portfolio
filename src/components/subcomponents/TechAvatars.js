import * as React from "react";
import { Avatar, AvatarGroup } from "@mui/material";
import PropTypes from "prop-types";

const TechAvatar = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const techLinks = [
    { name: "python", link: "https://www.python.org/" },
    { name: "javascript", link: "https://www.javascript.com/" },
    { name: "css", link: "https://www.w3schools.com/css/" },
    { name: "html", link: "https://www.w3schools.com/html/" },
    { name: "react", link: "https://reactjs.org/" },
    { name: "nodejs", link: "https://nodejs.org/" },
    { name: "django", link: "https://www.djangoproject.com/" },
    { name: "docker", link: "https://www.docker.com/" },
    { name: "postgres", link: "https://www.postgresql.org/" },
    { name: "expo", link: "https://expo.io/" },
    { name: "vue", link: "https://vuejs.org/" },
    { name: "sass", link: "https://sass-lang.com/" },
    { name: "redux", link: "https://redux.js.org/" },
    { name: "reactnative", link: "https://reactnative.dev/" },
    { name: "firebase", link: "https://firebase.google.com/" },
    { name: "tailwind", link: "https://tailwindcss.com/" },
  ];

  const renderAvatar = (name, key) => {
    let imageSrc;
    const imageName = name.replace(/\s*/g, "").toLowerCase();
    const iconLink = techLinks.find((tech) => tech.name === imageName);
    try {
      imageSrc = require(`../../assets/images/${imageName}_icon.webp`);
    } catch {
      imageSrc = require(`../../assets/images/default_coding.webp`);
    }

    return (
      <Avatar
        className="ring-2 ring-gray-700 dark:ring-gray-100 hover:animate-bounce transition ease-in-out duration-300"
        key={`${name}_${key}`}
        alt={name}
        src={imageSrc}
        title={name}
        placement="top"
        onClick={() => {
          iconLink && window.open(iconLink.link, "_blank");
        }}
      />
    );
  };

  return <AvatarGroup max={6}>{data?.map((name, key) => renderAvatar(name, key))}</AvatarGroup>;
};

export default TechAvatar;
TechAvatar.prototypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
