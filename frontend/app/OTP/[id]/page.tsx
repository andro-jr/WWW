"use client";
import { CustomButton } from "@/components";
import FormInput from "@/components/Form/FormInput";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { validateOtp } from "@/utils";
import Link from "next/link";
import Image from "next/image";

const page = ({ params }: any) => {
  const [inputData, setInputData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [valid, setValid] = useState("");
  console.log(inputData);

  const handleChange = async (e: any) => {
    e.preventDefault();
    setInputData(e.target.value);
  };

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    const payload = {
      userId: +params.id,
      otp: inputData,
    };

    try {
      const response: any = await validateOtp(payload);
      let statusCode;
      let errorMsg;
      if (response.data && response.data.user) {
        statusCode = response.status;
        console.log(statusCode);
        // Access status code directly
      // } else if (response.data && response.response.request.statusCode) {
      //   statusCode = response.response.request.statusCode;
      }
       else {
        // statusCode = 500; // Default status code
        statusCode = response.response.request.status;
        errorMsg = response.response.data.error;
      }
      // const statusCode = 200;
      console.log(statusCode);
      console.log(statusCode, errorMsg);

      if (statusCode === 200) {
        const token = response.data.user.token
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', isLoggedIn.toString());
        localStorage.setItem('token', token);
        router.push("/");
      } else {
        const errorMessage = errorMsg;
        setValid(errorMessage);
      }
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
          <h2 className="font-bold text-lg mb-1 text-center">
            Please enter your OTP to verify your email
          </h2>
          <span className="text-sm text-black-gray mb-2 text-center ">
            A one time password has been send to your email
          </span>
        </div>
        {valid && (
          <div className="text-red text-sm font-bold flex items-center justify-center my-2">
            {valid}
          </div>
        )}
        <FormInput
          name="otp"
          label="otp"
          placeholder="enter your otp"
          type="text"
          value={inputData}
          onChange={handleChange}
          style="max-w-[700px]"
        />
        <span className="mb-4 flex justify-center gap-1">
          Didn't get an email?{" "}
          <Link href="" className="text-blue font-bold">
            Resend OTP
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
