import React, { useState } from "react";

const links = [
  {
    id: 1,
    name: "About",
    href: "#about",
  },
  {
    id: 2,
    name: "Work",
    href: "#projects",
  },
  {
    id: 3,
    name: "Contact",
    href: "#contact",
  },
];

export default function Nav() {
  let arr = [true, false, false, false, false, false];
  const [style, setStyle] = useState(arr);
  const [dropDown, setDropDown] = useState(true);

  const selected = (props) => {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = false;
    }
    newArr[props] = true;
    setStyle(newArr);
  };

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="fixed top-0 left-0 z-50 bg-gray-800 text-white  border-b-2 border-gray-200 shadow h-24 w-full rounded py-5 px-7">
        <div className="flex justify-content-between items-center">
          <nav className="flex justify-between items-center w-full">
            <a className="flex items-center space-x-3 lg:pr-16 pr-6 pt-4 md:pt-0" href="#welcome-section">
              <img className="rounded-full border border-gray-200 dark:border-gray-700 h-12 w-12" src={require("../assets/avatar_head.png")} alt="avatar" />
              <h2 className="font-normal text-2xl leading-6 text-white dark:text-gray-800">CbeDroid</h2>
            </a>
            {/* For medium and plus sized devices */}
            <ul className="hidden md:flex self-end space-x-2">
              <li
                onClick={() => selected(0)}
                className={` md:hidden ${
                  style[0] ? "text-white bg-indigo-600" : "text-gray-100 dark:text-gray-600 border border-white bg-gray-400"
                }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                <svg
                  aria-haspopup="true"
                  aria-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="show-m-menu icon icon-tabler icon-tabler-menu"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              </li>
              {links.map((link, index) => (
                <li
                  key={index}
                  onClick={() => selected(index + 1)}
                  className={`group  ${
                    style[index + 1] ? "text-white bg-indigo-600" : "text-gray-600 border border-white bg-gray-50"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer  font-normal text-xs leading-3 shadow-md rounded`}
                >
                  <a className="block text-xl font-bold w-full h-full px-3 py-2.5" href={link?.href}>
                    {link?.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* for smaller devices */}
          <div className="md:hidden self-end mt-5 ">
            <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer text-center p-3 text-white bg-indigo-600 rounded flex justify-between items-center w-12 md:w-full">
              <div className="flex space-x-2">
                <p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={30}
                    height={36}
                    viewBox="0 0 18 18"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={24} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <ul id="list" className={`${dropDown ? "hidden" : "block"} absolute top-2 right-0 font-normal text-base leading-4  w-72 rounded shadow-md`}>
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                  >
                    <a className="block h-full w-full" href={link?.href}>
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
