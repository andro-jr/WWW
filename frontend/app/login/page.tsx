"use client";
import { CustomButton } from "@/components";
import FormInput from "@/components/Form/FormInput";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

const page = ({ params }: any) => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  console.log(inputData);

  // const handleChange = async (e: any) => {
  //   e.preventDefault();
  //   setInputData(e.target.value);
  // };

  const handleChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    // console.log(name);
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    const payload = {
      email: inputData.email,
      password: inputData.password,
    };

    try {
      const response: any = await login(payload);
      console.log("response", response);

      if (response.status === 200) {
        console.log(response.data.error);
        if (response.data.error) {
          const errorMsg = response.data.error;
          setError(errorMsg);
          console.log(error);
        } else {
          const tokenValue = response.data.user.token;
          console.log("token", tokenValue);
          console.log(response.status);
          setIsLoggedIn(true);
          const updatedValue = true; // Assign the updated value explicitly
          console.log(updatedValue);

          localStorage.setItem("isLoggedIn", updatedValue.toString());
          localStorage.setItem("token", tokenValue);

          const { id, name, email } = response.data.user;
          Cookies.set("id", id);
          Cookies.set("name", name);
          Cookies.set("email", email);
          router.push("/");
        }
      } else {
        setError("An error occurred. Please try again later.");
      }
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
        <div className="desc__text flex flex-col items-center mt-4">
          {error && (
            <div className="text-red text-sm font-bold mb-4">{error}</div>
          )}
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
        <FormInput
          name="password"
          label="password"
          placeholder="enter password"
          type="password"
          value={inputData}
          onChange={handleChange}
          style="max-w-[700px]"
        />

        <span className="mb-4 flex justify-center gap-1">
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
        </span>
        <CustomButton
          title="Login"
          backgroundStyles="bg-blue px-20 py-4 rounded-md"
          textStyles="text-white"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default page;
