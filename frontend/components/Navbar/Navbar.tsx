"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../Shared/CustomButton";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { fetchPackages } from "@/utils";
import Cookies from "js-cookie";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  const [profile, setProfile] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    id: +"",
  });

  const setFixed = () => {
    if (window.scrollY >= 800) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  let id;
  let name;
  let email;
  useEffect(() => {
    window.addEventListener("scroll", setFixed);

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const token = localStorage.getItem("token");
    // console.log(isLoggedIn);
    // console.log(token);

    if (isLoggedIn && token) {
      setProfile(true);
      id = Cookies.get("id");
      name = Cookies.get("name");
      email = Cookies.get("email");

      setUser({
        id: id,
        name: name,
        email: email,
      });
    }
    // console.log(profile);
  }, []);
  console.log(user);
  const router = useRouter();

  const handleLogin = () => {
    console.log("test");
    router.push("/login");
  };

  return (
    <div
      className={
        fix
          ? "navbar sticky flex justify-between py-4 items-center font-nunito w-full px-5 lg:px-20 transition-all duration-300 ease-in-out shadow-lg"
          : " navbar flex justify-between py-5 items-center font-nunito w-full px-5 lg:px-20 transition-all duration-300 ease-in-out"
      }
      id={fix ? "navbar fixed" : "navbar"}
      style={{
        transition: "all 0.5s ease-in-out",
      }}
    >
      <div className="left flex items-center gap-12">
        <div className="logo-img">
          {/* <h3 className="title text-3xl font-black">Travel .</h3> */}
          <Link href="/">
            <h3 className="title">Travel .</h3>
          </Link>
        </div>
        <div className="links">
          <ul className="hidden absolute lg:relative gap-10 lg:flex">
            <Link href="/packages">
              <li className="links font-nunito text-black hover:text-black-60 transition-all duration-300">
                Packages
              </li>
            </Link>
            <Link href="/blogs">
              <li className="links  text-black hover:text-black-60 transition-all duration-300">
                Blog
              </li>
            </Link>
            <Link href="/about">
              <li className="links  text-black hover:text-black-60 transition-all duration-300">
                About Us
              </li>
            </Link>
            <Link href="/contact">
              <li className="links  text-black hover:text-black-60 transition-all duration-300">
                Contact
              </li>
            </Link>
            {profile ? (
               <li className="links  text-black hover:text-black-60 transition-all duration-300">
               Log out
             </li>
            ) : (
              <div>
                <CustomButton
                  title="Login"
                  backgroundStyles="bg-blue-dark px-10 py-3 rounded-full"
                  textStyles="text-white normal"
                  classes="block lg:hidden"
                  btnType="button"
                  handleClick={handleLogin}
                />
              </div>
            )}
          </ul>
        </div>
      </div>

      {profile ? (
        <div className="flex items-center justify-center gap-3 cursor-pointer">
          <p className="font-md">{user.name}</p>
          <BsPersonLinesFill className="text-2xl" />
        </div>
      ) : (
        <div className="sm:hidden lg:block nav__links flex gap-10 items-center justify-center">
          <CustomButton
            title="Login"
            backgroundStyles="bg-blue px-10 py-3 rounded-md"
            textStyles="text-white normal"
            handleClick={handleLogin}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
