import React from "react";
import HamburgerMenuButton from "./hamburgerMenuButton";

import { NavLink } from "react-router-dom";

function handleClick() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  performAnimation();
}

function performAnimation() {
  const hamburger = document.getElementById("hamburger");
  const top = document.getElementById("hamburger-top");
  const middle = document.getElementById("hamburger-middle");
  const bottom = document.getElementById("hamburger-bottom");

  hamburger.classList.toggle("rotate-[-90deg]");
  top.classList.toggle("rotate-[-45deg]");
  top.classList.toggle("translate-x-[0px]");
  top.classList.toggle("translate-y-[11px]");
  middle.classList.toggle("w-[0px]");
  middle.classList.toggle("h-[0px]");
  middle.classList.toggle("invisible");
  bottom.classList.toggle("rotate-[45deg]");
  bottom.classList.toggle("translate-x-[0px]");
  bottom.classList.toggle("translate-y-[11px]");
}

const Header = () => {
  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          <h1 className="text-4xl">SuperHeroes</h1>
          <div className="hidden h-10 md:flex md:space-x-8">
            <div className="group">
              <NavLink to={"/"}>Home </NavLink>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>

            <div className="group">
              <NavLink to="/publishers">Publishers</NavLink>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <NavLink to="/superheroes">SuperHeroes</NavLink>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>

          <div className="md:hidden">
            <HamburgerMenuButton handleClick={handleClick} />
          </div>
        </nav>
        <div
          id="menu"
          className="hidden z-20 absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-3 pt-32 pl-12 space-y-3 text-lg text-white uppercase bg-zinc-900"
        >
          <NavLink
            to={"/"}
            className="hover:text-green-500"
            onClick={(e) => handleClick()}
          >
            Home
          </NavLink>

          <NavLink
            to={"/publishers"}
            className="hover:text-green-500"
            onClick={(e) => handleClick()}
          >
            Publishers
          </NavLink>
          <NavLink
            to={"/superheroes"}
            className="hover:text-green-500"
            onClick={(e) => handleClick()}
          >
            SuperHeroes
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Header;
