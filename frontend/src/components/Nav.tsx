import React, { useCallback, useState } from "react";

import Container from "components/styles/Container";
import FixedTop from "components/styles/FixedTop";

import Menu from "./ui/menu/Menu";
import { MenuItem } from "./ui/menu/MenuItem";
import { MenuList } from "./ui/menu/MenuList";

const links = [
  {
    id: 1,
    name: "About",
    href: "/#about",
  },
  {
    id: 2,
    name: "Work",
    href: "/#projects",
  },
  {
    id: 3,
    name: "Contact",
    href: "/#contact",
  },
  {
    id: 4,
    name: "Resume",
    href: "/resume",
  },
];

const Nav = () => {
  const [active, setActive] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const getActive = useCallback(
    (index: number) => {
      // reset active array
      let newArr = [...active];
      for (let i = 0; i < newArr.length; i++) {
        newArr[i] = false;
      }
      // set the current index true
      newArr[index] = true;
      setActive(newArr);
    },
    [setActive, active],
  );

  return (
    <Container>
      <FixedTop className="bg-gray-800 border-b-2 border-gray-200 h-24 z-50">
        <div className="flex justify-content-between items-center mx-2">
          <nav className="flex justify-between items-center w-full">
            <a
              className="flex items-center space-x-3 lg:pr-16 pr-6 pt-4 md:pt-0"
              href="/"
            >
              <img
                className="rounded-full border border-gray-200 dark:border-gray-700 h-12 w-12"
                src={"/assets/images/avatar_head.png"}
                alt="avatar"
              />
              <h2 className="font-normal text-2xl leading-3 font-semibold text-white dark:text-gray-800">
                CbeDroid
              </h2>
            </a>
            {/* For medium and plus-sized devices */}
            <ul className="hidden md:flex self-end space-x-2">
              {links.map((link, index) => (
                <li key={index} onClick={() => getActive(index + 1)}>
                  <a
                    className="text-gray-50 text-xl font-semibold hover:text-blue-500 ease-in-out duration-200 mx-2"
                    href={link?.href}
                  >
                    {link?.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* for smaller devices */}
          <div className="md:hidden">
            <Menu
              background="#4F46E5"
              color="#fff"
              onClick={() => setIsMobile(!isMobile)}
              onClose={() => null}
            >
              <MenuList id="list">
                {links.map((link, index) => (
                  <MenuItem key={index}>
                    <a className="block h-full w-full" href={link?.href}>
                      {link?.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
        </div>
      </FixedTop>
    </Container>
  );
};

export default Nav;
