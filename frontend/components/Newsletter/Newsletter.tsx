"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import Router from "next/router";
import { useRouter } from "next/navigation";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const router = useRouter();

  const newsletterSub = () => {
    router.push("/signup");
  };

  const [input, setInput] = useState("");

  return (
    <div className="newsletter my-24 px-5 lg:px-20 ">
      <div className="newletter__image relative">
        <Image
          src="/man-standing.jpg"
          alt=""
          fill
          className=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="newsletter__details flex flex-col items-center justify-center">
        <div className="newsletter__detail-text flex flex-col items-center justify-center">
          <h2 className="text-center text-xl md:text-4xl px-2 md:px-0 max-w-[400px] font-bold leading-tight">
            Get special offers, and more from Travel
          </h2>
          <p className="text-center max-w-[350px] text-black-gray mt-1 px-2 md:px-0">
            Subscribe to see secret deals prices drop the moment you sign up!
          </p>
        </div>

        <div className="news-input  w-11/12 md:w-3/4">
          <input
            type="text"
            className=" px-16 py-5 rounded-full focus:outline-none w-full"
            placeholder="Email Address"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div className="news-input__icon">
            <FaEnvelope className="text-blue text-xl" />
          </div>

          <CustomButton
            title="Subscribe"
            backgroundStyles="bg-blue px-8 py-3 rounded-full news-button"
            textStyles="text-white"
            handleClick={newsletterSub}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
