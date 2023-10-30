import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Hero = () => {
  return (
    <section className=" relative grid place-content-center w-full h-screen text-white">
      <span className=" text-xs pb-2  text-gray-400 ml-[4.6rem] lg:ml-[6.3rem]">I AM</span>
      <h1 className="text-8xl font-extrabold lg:text-9xl">TURA</h1>
      <div className="relative pt-4  text-gray-400">
        <span className="absolute right-[5.3rem] text-xs  lg:right-[8.2rem] ">
          A JUNIOR
        </span>
        <br />
        <span className="absolute right-[2.5rem] text-xs max-sm:right-[2.3rem] lg:right-[5.2rem]">
          WEB DEVELOPER
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-400 rotate-90 absolute bottom-16 -right-8">
        <p>SCROLL</p>
        <span>----</span>
      </div>

      <div className="absolute bottom-10 flex flex-col gap-4 text-xs">
        <FaFacebookF className=" text-gray-400 hover:text-gray-100 transition hover:scale-150"/>
        <FaTwitter className=" text-gray-400 hover:text-gray-100 transition hover:scale-150"/>
        <ImInstagram className=" text-gray-400 hover:text-gray-100 transition hover:scale-150"/>
      </div>
    </section>
  );
};

export default Hero;
