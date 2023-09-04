import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${
              index === navLink.length - 1 ? "mr-0" : "mr-10"
            }`}>
            <a href={`#${navLink.title.toLowerCase()}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          alt="menu"
          src={toggle ? close : menu}
          className="w-[28px] h-[28px]"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex-col flex justify-end items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLink.length - 1 ? "mr-0" : "mb-4"
                }`}>
                <a href={`#${navLink.title.toLowerCase()}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
