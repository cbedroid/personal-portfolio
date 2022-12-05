import React, { useMemo } from "react";

import { Skeleton } from "@mui/material";
import TextEllipsis from "components/ui/TextEllipsis";
import { sortBy } from "lodash";

import IconLink from "../../../components/IconLink";
import { useGetSkillsQuery } from "../../../queries";
import { UserEntity } from "../../../types";
import AvatarDrawer from "./AvatarDrawer";
import BorderLinearProgress from "./BorderLinearProgress";

type Props = {
  user: UserEntity;
};
const DeveloperSideBar = ({ user }: Props) => {
  const skillQuery = useGetSkillsQuery();
  const skills = useMemo(
    () =>
      skillQuery.isSuccess && sortBy(skillQuery.data.results, (skill) => -skill.rate),
    [skillQuery],
  );

  // User social media links to display in sidebar
  const socialAccount = useMemo(() => {
    const socialAccountList = ["github", "linkedin", "twitter"];
    return (
      user.profile?.social_account.filter((account) =>
        socialAccountList.includes(account.title.toLowerCase()),
      ) ?? []
    );
  }, [user]);

  return (
    <>
      <div className="about__header bg-gray-700 dark:bg-gray-100 mx-auto w-full rounded-t-md p-4">
        <AvatarDrawer
          image={user.profile.avatar}
          title={user.full_name}
          subtitle="Full-Stack Web Developer"
        />
        {socialAccount.length > 0 && (
          <div className="flex flex-row justify-center my-4">
            {socialAccount.map((account) => (
              <div key={`icon-${account.title}-${account.id}`}>
                <IconLink
                  icon={account.title.toLowerCase() ?? ""}
                  link={account.link}
                  className="px-2"
                  iconStyle="bg-gray-300 rounded-full m-auto p-1"
                  iconProps={{ fontSize: 36 }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="content py-4 px-8">
        <div className="font-normal text-base leading-relaxed dark:text-gray-600 text-white">
          <TextEllipsis text={user.profile.description} color="gray" />
        </div>

        <div
          id="skill-level"
          className="flex flex-col space-y-2 border-t-1 border-gray-400 py-8"
        >
          {!!skills && skills.length > 0 ? (
            skills.map((skill) => (
              <BorderLinearProgress
                key={`${skill.title}-${skill.id}`}
                variant="determinate"
                title={skill.title}
                value={skill.rate}
                color={"secondary"}
                sx={{
                  height: 10,
                  backgroundColor: "#000",
                  borderRadius: 10,
                }}
              />
            ))
          ) : (
            <div className="flex flex-col gap-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={`skill-skeleton-${i}`}>
                  <Skeleton
                    variant="text"
                    width={75}
                    sx={{ bgcolor: "grey.600" }}
                    animation="wave"
                  />
                  <Skeleton
                    key={`skills-${i}`}
                    variant="text"
                    height={25}
                    sx={{ bgcolor: "grey.600" }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DeveloperSideBar;
