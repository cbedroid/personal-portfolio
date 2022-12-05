import React, { useEffect, useRef, useState } from "react";

import { Avatar, AvatarGroup, Skeleton } from "@mui/material";
import { debounce } from "lodash";

import { ProjectEntity, TechnologyEntity } from "../../../types";

type Props = {
  technologies: TechnologyEntity[];
  project: ProjectEntity["name"];
};

const TechAvatar = ({ technologies, project }: Props) => {
  const [maxAvatar, setMaxAvatar] = useState<number>(6);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mouseenter", () => {
        debounce(() => setMaxAvatar(20), 400)();
      });

      currentRef.addEventListener("mouseleave", () => {
        debounce(() => setMaxAvatar(6), 400)();
      });
      return () => {
        if (!currentRef) return;
        currentRef.removeEventListener("mouseenter", () => {
          setMaxAvatar(6);
        });

        currentRef.removeEventListener("mouseleave", () => {
          setMaxAvatar(6);
        });
      };
    }
  }, []);

  return (
    <AvatarGroup
      className="flex flex-wrap items-start gap-y-2 max-w-full"
      ref={ref}
      max={maxAvatar}
      variant="circular"
      sx={{ justifyContent: "start" }}
    >
      {!!technologies
        ? technologies?.map((technology) => (
            <div className="group" key={`${project}-technology-${technology.name}`}>
              <div className="group-hover:animate-bounce transition ease-in-out duration-300">
                <a
                  href={technology.link}
                  target="_blank"
                  rel="noreferrer"
                  title={technology.name}
                >
                  <Avatar
                    className="ring-2 ring-gray-800 dark:ring-gray-100 shadow-sm group-hover:drop-shadow-xl"
                    alt={technology.name}
                    src={technology.image}
                  />
                </a>
              </div>
            </div>
          ))
        : [...Array(3)].map((_, i) => (
            <Skeleton
              key={`${project}-skeleton-${i}`}
              variant="circular"
              width={40}
              height={40}
            />
          ))}
    </AvatarGroup>
  );
};

export default TechAvatar;
