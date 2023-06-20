"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";
import { useRouter } from "next/navigation";
import { start } from "repl";

const login = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  // console.log(firstName);
  // console.log(lastName);
  // console.log(email);
  // console.log(password);
  // console.log(confirmPassword);

  const handleClick = (event:any) => {
    event.preventDefault();

    try {
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "" ||
        checked === false
      ) {
        alert("please fill in all the details");
      } else if (
        firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().includes("@", 0) &&
        password === confirmPassword &&
        checked === true
      ) {
        const adminPayload = {
          firstName,
          lastName,
          email,
          password,
        };
        console.log(adminPayload);
        router.push("/");
      } else {
        alert("Please fill in all the details correctly");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen mx-auto">
      <div className="h-full w-full shadow-lg overflow-hidden bg-white mx-auto flex">
        <div className="hidden lg:flex image image-overlay w-3/5 flex-col items-center justify-center text-center px-20">
          {/* <Image></Image> */}
          <h1 className="text-white text-6xl  font-bold drop-shadow-sm">
            Travel Nepal with us .
          </h1>
          <div>
            <p className="text-white mt-5 drop-shadow-sm">
              Embark on unforgettable adventures, from exotic destinations to
              hidden gems, with our comprehensive travel guide. Experience the
              joy of exploring, one journey at a time
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-10 flex flex-col items-start justify-center w-full lg:w-2/5">
          <h1 className="text-5xl text-black font-extrabold font-nunito">
            Travel .
          </h1>
          <p className="mb-4 font-normal font-lato mt-5">
            Are you an admin? Create your account and add packages
          </p>
          <form action="#" className="w-full">
            <div className="mt-5">
              <input
                type="text"
                placeholder="First name"
                className="border border-black-gray py-3 px-3 w-full rounded-sm"
                required
                value={firstName}
                onChange={({ target }) => setFirstName((e) => target?.value)}
              />
            </div>

            <div className="mt-5">
              <input
                type="text"
                placeholder="Last name"
                className="border border-black-gray py-3 px-3 w-full rounded-sm"
                required
                value={lastName}
                onChange={({ target }) => setLastName((e) => target?.value)}
              />
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                className="border border-black-gray py-3 px-3 w-full rounded-sm"
                value={email}
                onChange={({ target }) => setEmail((e) => target?.value)}
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                className="border border-black-gray py-3 px-3 w-full rounded-sm"
                required
                value={password}
                onChange={({ target }) => setPassword((e) => target?.value)}
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-black-gray py-3 px-3 w-full rounded-sm"
                required
                value={confirmPassword}
                onChange={({ target }) =>
                  setConfirmPassword((e) => target?.value)
                }
              />
            </div>
            <div className="mt-5 flex items-center w-auto justify-start gap-2">
              <input
                type="checkbox"
                className="border border-black-gray"
                style={{ marginTop: "4px" }}
                required
                onChange={() => setChecked(true)}
              />
              <span>
                I accept the{" "}
                <Link href="#" className="text-black font-semibold">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link href="#" className="text-black font-semibold">
                  Privacy Policy
                </Link>
              </span>
            </div>
            <div className="mt-5">
              <CustomButton
                title="Register Now"
                backgroundStyles="w-full bg-primary py-3"
                textStyles="text-center text-white"
                btnType="button"
                handleClick={handleClick}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
