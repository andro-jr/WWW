"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchPackages } from "@/utils";

const DestinationOpt = () => {
  // const destination = [
  //   {
  //     imageSrc: "/1.jpg",
  //     title: "Annapurna Circuit",
  //     description:
  //       "Talk to local people and explore the culture. Talk to local people and explore the culture Talk to local people and explore the culture",
  //     pricingText: "USD 50/Day",
  //     features: ["Free Wifi", "Free breakfast"],
  //   },
  //   {
  //     imageSrc: "/2.jpg",
  //     title: "Khumai Dadha",
  //     description:
  //       "Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world",
  //     pricingText: "USD 80/Day",
  //     features: ["Free Wifi", "Free breakfast"],
  //   },
  //   {
  //     imageSrc: "/3.jpg",
  //     title: "Poonhill ",
  //     // description: "Travel and Explore Nepal with beautiful culture",
  //     description: "Travel and Explore Nepal",
  //     pricingText: "USD 80/Day",
  //     features: ["Free Wifi", "Free breakfast"],
  //   },
  //   {
  //     imageSrc: "/4.jpg",
  //     title: "Everest Base Camp",
  //     description:
  //       "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
  //     pricingText: "USD 80/Day",
  //     features: ["Free Wifi", "Free breakfast"],
  //   },
  //   {
  //     imageSrc: "/2.jpg",
  //     title: "Everest Base Camp",
  //     description: "A magnificent lake to explore",
  //     pricingText: "USD 80/Day",
  //     features: ["Free Wifi", "Free breakfast"],
  //   },
  // ];

  const [allPackages, setAllPackages] = useState([]);
  const getAllPackages = async () => {
    try {
      const pack = await fetchPackages();
      // console.log(pack);
      setAllPackages(pack);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

  return (
    <div
      className="px-5 lg:px-20 min-h-[100vh] blog bg-[#f8f8f8] md:bg-[rgba(255,255,255,0)] bg-auto md:bg-cover"
      style={{
        backgroundImage: "url('/blog-bg.png')",
        // backgroundSize: "inherit",
        backgroundRepeat: "no-repeat",

        // @media (max-width:300px){backgroundImage:'none'}
      }}
    >
      <div className="blogs-info mt-96 md:mt-56 ">
        <span
          style={{ fontFamily: "Satisfy, cursive", fontSize: "32px" }}
          className="text-blue"
        >
          Choose Your
        </span>
        <h2
          className="text-5xl md:text-6xl font-black capitalize font-lato"
          style={{ fontFamily: "Lato, sans-Serif", letterSpacing: "5px" }}
        >
          Destination
        </h2>
        <p
          className="text-lg mt-4 max-w-[600px] text-center"
          style={{ lineHeight: "170%" }}
        >
          Come visit Nepal the best way possible and enjoy your time with
          travel. We asure you the best services during all of your trips.
        </p>
      </div>
      <div className="blogs-images pb-40 relative flex flex-col md:flex-row flex-nowrap md:flex-wrap items-center justify-center gap-20 ">
        {allPackages.slice(0, 3).map((pack, index) => (
          <div
            className="blog_image relative"
            style={{ width: "350px", height: "350px", maxWidth: "400px" }}
          >
            <Link href="/">
              <Image
                src={pack.featuredImg}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "50%",
                }}
                alt=""
                className=""
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationOpt;
