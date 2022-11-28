import React, { useMemo } from "react";

import { Skeleton } from "@mui/material";
import Slide from "@mui/material/Slide";
import DeveloperSideBar from "about/components/DeveloperSideBar";
import Image from "components/ui/Image";
import { useGetUsersQuery } from "queries";
import { useInView } from "react-intersection-observer";

const About = () => {
  const userQuery = useGetUsersQuery({ username: "cbedroid" });
  const userData = userQuery.isSuccess && userQuery.data.results;
  const user = useMemo(
    () => userData && userData.find((user) => user.username === "cbedroid"),
    [userData],
  );

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.75,
    rootMargin: "100px",
    triggerOnce: true,
  });

  return (
    <section id="about" className="min-h-screen" ref={ref}>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:px-6 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 bg-gray-500 p-4">
          <div className="w-full lg:w-5/12 flex flex-col pt-8">
            <div className="wrapper">
              <h1
                className="text-3xl lg:text-4xl font-bold leading-9 text-center text-gray-100 dark:text-gray-800 pb-4"
                style={{ fontFamily: "Merriweather Sans, sans-serif" }}
              >
                Who Am I ?
              </h1>
              <Slide direction="up" in={inView} mountOnEnter unmountOnExit>
                <div className="wrapper bg-gray-800 dark:bg-gray-200 rounded-md">
                  {!!user ? (
                    <DeveloperSideBar user={user} />
                  ) : (
                    <Skeleton variant="rectangular" width={210} height={700} />
                  )}
                </div>
              </Slide>
            </div>
          </div>
          <div
            className="w-full lg:w-8/12 bg-gray-700 ring ring-offset-4 ring-yellow-400 border-gray-300 rounded-md shadow sm:my-24"
            style={{ minHeight: 300, maxHeight: 800 }}
          >
            <Image
              className="w-full h-full max-h-fit"
              src={user ? user.profile.avatar : ""}
              alt="Programmer illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
