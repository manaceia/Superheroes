import React from "react";

// function performAnimation() {
//   const hamburger = document.getElementById("hamburger");
//   const top = document.getElementById("hamburger-top");
//   const middle = document.getElementById("hamburger-middle");
//   const bottom = document.getElementById("hamburger-bottom");

//   hamburger.classList.toggle("rotate-[-90deg]");
//   top.classList.toggle("rotate-[-45deg]");
//   top.classList.toggle("translate-x-[0px]");
//   top.classList.toggle("translate-y-[12px]");
//   middle.classList.toggle("w-[0px]");
//   middle.classList.toggle("h-[0px]");
//   middle.classList.toggle("invisible");
//   bottom.classList.toggle("rotate-[45deg]");
//   bottom.classList.toggle("translate-x-[0px]");
//   bottom.classList.toggle("translate-y-[12px]");
// }

const HamburgerMenuButton = ({ handleClick }) => {
  return (
    <button
      onClick={() => {
        // performAnimation();
        handleClick();
      }}
      id="hamburger"
      className="group z-40 hamburger w-[24px] h-[24px] relative transition-all duration-250 cursor-pointer bg-slate-500/10 transition-all duration-500"
    >
      <span
        id="hamburger-top"
        className="absolute hamburger-top w-[24px] h-[2px] top-0 left-0 bg-white transition-all duration-500"
      ></span>
      <span
        id="hamburger-middle"
        className="absolute hamburger-middle w-[24px] h-[2px] top-0 left-0 bg-white translate-y-[7px] transition-all duration-750"
      ></span>
      <span
        id="hamburger-bottom"
        className="absolute hamburger-bottom top-0 left-0  w-[24px] h-[2px] bg-white translate-y-[14px] transition-all duration-500"
      ></span>
    </button>
  );
};

export default HamburgerMenuButton;
