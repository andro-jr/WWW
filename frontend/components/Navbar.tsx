import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="flex justify-between py-5 items-center font-nunito w-auto px-5 lg:px-20"
      id="navbar"
    >
      <div className="left flex items-center gap-12">
        <div className="logo-img">
          {/* <h3 className="title text-3xl font-black">Travel .</h3> */}
          <h3 className="title">Travel .</h3>
        </div>
        <div className="links">
          <ul className="hidden absolute lg:relative gap-10 lg:flex">
            <Link href="/packages">
              <li className="links font-lato">Packages</li>
            </Link>
            <Link href="/blogs">
              <li className="links">Blog</li>
            </Link>
            <Link href="/about">
              <li className="links">About Us</li>
            </Link>
            <Link href="/contact">
              <li className="links">Contact</li>
            </Link>

            <CustomButton
              title="Login"
              backgroundStyles="bg-blue px-10 py-3 rounded-full"
              textStyles="text-white normal"
              classes="block lg:hidden"
            />
          </ul>
        </div>
      </div>
      <div className="nav__links flex gap-10 items-center justify-center">
        <CustomButton
          title="Login"
          backgroundStyles="bg-blue px-10 py-3 rounded-full"
          textStyles="text-white normal"
        />
      </div>
    </div>
  );
};

export default Navbar;
