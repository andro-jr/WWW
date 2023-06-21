import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <div
      className="flex justify-around py-5 items-center font-nunito border-8 border-white-light w-[1300px] mx-auto rounded-full bg-white"
      id="navbar"
    >
      <div className="logo">
        <div className="logo-img">
          <h3 className="font-nunito text-3xl font-black">Travel .</h3>
        </div>
      </div>
      <div className="nav__links flex gap-10 items-center justify-center">
        <ul className="flex gap-10">
          <li className="text-md text-black">Home</li>
          <li className="text-md text-black">Packages</li>
          <li className="text-md text-black">Blog</li>
          <li className="text-md text-black">About Us</li>
          <li className="text-md text-black">Contact</li>
        </ul>
        <CustomButton
          title="Login"
          backgroundStyles="bg-primary px-10 py-3 rounded-full"
          textStyles="text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
