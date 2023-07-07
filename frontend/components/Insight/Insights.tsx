import Script from "next/script";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

const Insights = () => {
  return (
    <div className="wrapper min-h-[50vh] mt-24 relative flex item-center justify-center">
      <Image
        src="/signup.jpg"
        alt="hims"
        fill
        className="insights_frame"
        style={{ objectFit: "cover", objectPosition: "center", zIndex: "-1" }}
      />
      <div className="insights__desc flex flex-col items-center">
        <h2
          className="mt-20 text-3xl md:text-4xl text-white"
          style={{ fontFamily: '"Satisfy", cursive' }}
        >
          Go & Discover
        </h2>
        <h1 className="text-white my-4 md:my-2 leading-tight text-5xl lg:text-7xl font-extrabold capitalize font-lato text-center">
          Breathtaking Trails
        </h1>
        <p className="text-white mt-2 px-3 lg:px-0 max-w-[700px] text-center text-md">
          Trekking is an outdoor activity of walking for more than a day. It is
          a form of walking, undertaken with the specific purpose of exploring
          and enjoying the scenery.
        </p>
      </div>

      {/* <div className="absolute hidden lg:block top-[70%] right-0 w-full h-auto">
        <svg
          viewBox="0 0 1540 314"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 314V134.5C0 134.5 107 332.811 376 296C645 259.189 709.5 161.5 709.5 161.5L1140 160H1540V314H0Z"
            fill="white"
          ></path>
          <path
            d="M1256 172.039C1444 206.039 1540 296.5 1540 296.5V138C1540 138 1464.5 75.0404 1303 31.0401C1240.5 14.8677 1042 -24.959 902.5 22.5401C825 48.9286 803.5 66.04 728.5 143.54C697.344 175.734 635.5 219.5 635.5 219.5C635.5 219.5 726 256.039 822 240.039C986 220.039 1083 149.539 1256 172.039Z"
            fill="#ECF2FC"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Insights;
