import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

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

  useEffect(() => {
    console.log("Header Loaded");
  }, []);

  return (
    <>
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
      <nav x-data={isOpen} id="navbar" className="fixed top-0 left-0 z-50 bg-gray-800 border-b-2 border-gray-200 shadow h-24 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center h-full md:px-12">
          <div className="flex justify-between items-center">
            <div className="flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className={`md:flex items-center ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col mt-2 md:flex-row md:items-center md:gap-4 md:mt-0 md:mx-1">
              {links.map((link) => (
                <li className="group nav-link" key={link.id}>
                  <a className="text-xl text-white group-hover:text-gray-300 font-semibold" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
