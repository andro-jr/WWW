"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";
import { useRouter } from "next/navigation";
import { start } from "repl";
import FormInput from "@/components/Form/FormInput";

const validateUserInfo = (userInfo: any) => {
  const { fullName, email, password } = userInfo;
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!fullName.trim()) return { ok: false, error: "Name is missing" };
  if (!email.trim()) return { ok: false, error: "Email is missing" };
  if (!isValidEmail.test(email))
    return { ok: false, error: "Email is invalid" };
  if (!password.trim()) return { ok: false, error: "Password is missing" };
  if (password.length < 4)
    return { ok: false, error: "Password must be atlest 4 characters" };

  return { ok: true };
};

const login = () => {
  const router = useRouter();

  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  console.log(inputData);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { ok, error } = validateUserInfo(inputData);
    console.log(inputData);
    console.log(ok, error);

    if (!ok) return;
  };

  return (
    <div className="h-screen mx-auto">
      <div className="h-full w-full shadow-lg overflow-hidden bg-white mx-auto flex">
        <div className="hidden lg:flex image image-overlay w-8/12 flex-col items-center justify-center text-center px-20">
          {/* <Image></Image> */}
          <h1 className="text-white text-6xl font-bold drop-shadow-sm">
            Travel Nepal with us .
          </h1>
          <div>
            <p className="text-white mt-5 drop-shadow-sm tracking-wider">
              Embark on unforgettable adventures, from exotic destinations to
              hidden gems, with our comprehensive travel guide. Experience the
              joy of exploring, one journey at a time
            </p>
          </div>
        </div>

        <div className="px-8 sm:px-20 flex flex-col items-start justify-center w-full lg:w-1/3">
          <h1 className="tertiary-heading mb-10 text-center w-full tracking-wider	">
            Sign Up
          </h1>

          <form action="#" className="w-full" onSubmit={handleSubmit}>
            <FormInput
              name="fullName"
              label="Full Name"
              placeholder="Full Name"
              type="text"
              value={inputData}
              onChange={handleChange}
            />
            <FormInput
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
              value={inputData}
              onChange={handleChange}
            />
            <FormInput
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              value={inputData}
              onChange={handleChange}
            />

            <div className="mt-7">
              <CustomButton
                title="Sign Up"
                backgroundStyles="w-full bg-blue py-3 rounded-xl"
                textStyles="text-center text-white text-uppercase text-sm tracking-widest"
                btnType="submit"
              />
            </div>
          </form>
          <p className="text-center w-full mt-3 text-black-60">
            Already have an account?{" "}
            <Link href="/login">
              <strong>Sign In</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
