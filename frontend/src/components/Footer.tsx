import React from "react";

import { Skeleton } from "@mui/material";

import { useGetUserProfilesQuery } from "../queries";

const Footer = () => {
  const userProfileQuery = useGetUserProfilesQuery();
  /* A list of profile containing the username `cbedroid`. */
  const profiles = userProfileQuery.isSuccess && userProfileQuery.data.results;

  /* Since usernames are unique, we can be certain the first profile's
     is the correct profile containing the social accounts
    */
  const socialAccounts = !!profiles ? profiles[0]?.social_account : [];

  return (
    <footer>
      <section className="bg-gray-600 border-t border-red-600">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="header">
            <h2 className="text-4xl font-bold text-white border-b-4 border-blue-600 w-4/5 lg:w-1/5 pb-2">
              Stay Connected!
            </h2>
          </div>
          <div className="contact-links flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 text-gray-100 p-4 my-4 md:mt-16 lg:items-center ">
            {socialAccounts.length > 0
              ? socialAccounts?.map((social, i) => (
                  <a
                    className="btn floating-link"
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    key={`footer-link-${social.title}-${i}`}
                  >
                    {social.icon && <i className={`${social.icon}`}></i>}
                    <span className="pl-1">{social.title}</span>
                  </a>
                ))
              : [...Array(4)].map((_, i) => (
                  <Skeleton key={`footer-link-${i}`} width={200} height={100} />
                ))}
          </div>
        </div>

        <div>
          <div className="text-center mt-24">
            <p className="focus:outline-none text-gray-200 text-base md:order-1 text-center">
              @ 2022 CMB Technologies and Consulting LLC. All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
