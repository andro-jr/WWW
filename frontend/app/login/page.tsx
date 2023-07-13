"use client";
import { CustomButton } from "@/components";
import FormInput from "@/components/Form/FormInput";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { validateOtp } from "@/utils";
import Link from "next/link";
import Image from "next/image";

const page = ({ params }: any) => {
  const [inputData, setInputData] = useState();
  const [valid, setValid] = useState();
  console.log(inputData);

  const handleChange = async (e: any) => {
    e.preventDefault();
    setInputData(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    const payload = {
      userId: +params.id,
      otp: inputData,
    };

    try {
      const response = await validateOtp(payload);
      console.log(response);
      // if(response.data.status === 200)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="flex flex-col shadow-md bg-white-toned p-16 w-[600px] rounded-lg">
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
          {/* <h2 className="font-bold text-lg mb-1 text-center">
            Login
          </h2> */}
          {/* <span className="text-sm text-black-gray mb-2 text-center ">
            A one time password has been send to your email
          </span> */}
        </div>
        <FormInput
          name="otp"
          label="otp"
          placeholder="enter email"
          type="text"
          value={inputData}
          onChange={handleChange}
          style="max-w-[700px]"
        />
        <FormInput
          name="otp"
          label="otp"
          placeholder="enter password"
          type="text"
          value={inputData}
          onChange={handleChange}
          style="max-w-[700px]"
        />

        <span className="mb-4 flex justify-center gap-1">
          <Link href="/signup" className="text-black-gray text-sm font-bold no-underline hover:underline">
            Don't have an account ?
          </Link>
          <Link href="/forgotpassword" className="text-black-gray text-sm font-medium no-underline hover:underline">
            Forgot Password?
          </Link>
        </span>
        <CustomButton
          title="Submit"
          backgroundStyles="bg-blue px-20 py-4 rounded-md"
          textStyles="text-white"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default page;