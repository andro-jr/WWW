"use client";
import { CustomButton } from "@/components";
import FormInput from "@/components/Form/FormInput";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

const page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputData, setInputData] = useState({ email: "" });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  console.log(inputData);
  const handleChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    console.log(name);
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    const payload = {
      email: inputData.email,
    };
    console.log(payload);

    try {
      const response: any = await forgotPassword(payload);
      console.log("response", response);
      // console.log(response.status);

      if (response.status === 200) {
        const token = localStorage.getItem("token");
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        // const tokenValue = response.data.token
        console.log("test");
        setSubmit(true);
        setMessage(response.data.message);
        if (token) {
          localStorage.removeItem("token");
          localStorage.removeItem("isLoggedIn");
          // localStorage.setItem("token", tokenValue);
        } else {
          // localStorage.setItem("token", tokenValue);
        }
      } else {
        setError(response.response.statusText);
      }

      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white-toned md:bg-none w-screen h-screen flex items-center justify-center ">
      <div className="flex flex-col shadow-none md:shadow-md bg-white-toned p-16 w-[600px] rounded-lg">
        <div
          className="otp__image relative "
          style={{ minWidth: "200px", minHeight: "200px" }}
        >
          <Image
            src="/keys.svg"
            alt=""
            fill
            className="top-10 left-0"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        {submit === true ? (
          <div className="flex items-center justify-center my-6">
            <p className="text-md font-bold text-center text-blue">{message}</p>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="desc__text flex flex-col items-center mt-4">
              {error && (
                <div className="text-red text-sm font-bold mb-4">{error}</div>
              )}
              <span className="text-sm text-black-gray mb-2 text-center font-bold">
                Enter your email address
              </span>
            </div>
            <FormInput
              name="email"
              label="email"
              placeholder="enter email"
              type="text"
              value={inputData}
              onChange={handleChange}
              style="max-w-[700px]"
            />

            {/* <span className="mb-4 flex justify-center gap-1">
          <Link
            href="/signup"
            className="text-black-gray text-sm font-bold no-underline hover:underline"
          >
            Don't have an account ?
          </Link>
          <Link
            href="/forgotpassword"
            className="text-black-gray text-sm font-medium no-underline hover:underline"
          >
            Forgot Password?
          </Link>
        </span> */}
            <CustomButton
              title="Login"
              backgroundStyles="bg-blue px-20 py-4 rounded-md"
              textStyles="text-white"
              handleClick={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
