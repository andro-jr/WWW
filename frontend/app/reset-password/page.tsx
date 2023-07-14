"use client";
import React, { useState, useEffect } from "react";

import { CustomButton } from "@/components";
import FormInput from "@/components/Form/FormInput";

import { verifyPassResetToken, resetPassword } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";

const page = ({ params }: any) => {
  // const { token, id } = useParams();
  const [tokenValue, setTokenValue] = useState("");
  const [userId, setUserId] = useState("");
  const [submit, setSubmit] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [inputData, setInputData] = useState("");
  console.log(inputData);

  const handleChange = (e: any) => {
    e.preventDefault();
    setInputData(e.target.value);
  };

  const token = searchParams.get("token");
  const id = searchParams.get("id");

  useEffect(() => {
    setTokenValue(token);
    setUserId(id);
  }, []);

  const handleSubmit = async (e: any) => {

    // const token = localStorage.getItem('token')
    const payload = {
      token: tokenValue,
      userId: userId,
    };
    console.log(payload);

    try {
      const response: any = await verifyPassResetToken(payload);
      console.log("verified", response);

      console.log(response.data.valid);
      if (response.data.valid === true) {
        const payload1 = {
          newPassword: inputData,
          userId: userId,
        };
        try {
          const response: any = await resetPassword(payload1);
          console.log("password Reset", response);
        } catch (error) {
          console.log(error);
        }
      }
      router.push('/');
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
            <p className="text-md font-bold text-center text-blue"></p>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="desc__text flex flex-col items-center mt-4">
              
              <span className="text-sm text-black-gray mb-2 text-center font-bold">
                Enter new password
              </span>
            </div>
            <FormInput
              name="password"
              label="password"
              placeholder="enter new password"
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
