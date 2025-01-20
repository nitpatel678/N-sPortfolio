import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="z-20 sticky top-3 rounded-lg ml-6 mt-2 bg-white bg-opacity-20 backdrop-blur-lg mr-6 px-8 py-4 border-2 border-violet-600 text-white shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="ml-4 text-2xl font-bold tracking-[0.25em] text-stroke text-violet-800">
        N<span className="text-violet-600 text-[1.6rem]">Patel</span>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-violet-800 focus:outline-none text-3xl"
        aria-label="Toggle Navigation"
      >
        &#9776;
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
          } absolute sm:static top-[72px] left-0 w-full sm:w-auto bg-white bg-opacity-10 backdrop-blur-3xl border border-violet-600 sm:border-none sm:flex items-center flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0 font-extrabold font-[Syne] transition-all duration-900 ease-in-out overflow-hidden`}
          >
        <ul
          className="flex flex-col sm:flex-row mr-3 space-y-4 sm:space-y-0 sm:space-x-6 px-8 sm:px-0"
          onClick={closeMenu}
        >
          <li>
            <a
              href="#home"
              className="hover:text-violet-600 transition-transform transform hover:scale-110 text-stroke text-violet-800"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-violet-600 transition-transform transform hover:scale-110 text-stroke text-violet-800"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-violet-600 transition-transform transform hover:scale-110 text-stroke text-violet-800"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="hover:text-violet-600 transition-transform transform hover:scale-110 text-stroke text-violet-800"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact-me"
              className="hover:text-violet-600 transition-transform transform hover:scale-110 text-stroke text-violet-800"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;