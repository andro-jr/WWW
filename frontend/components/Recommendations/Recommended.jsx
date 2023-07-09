"use client";
import React from "react";
import { Card, Rating } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";

const Recommended = () => {
  const recommendation = [
    {
      imageSrc: "/flags.jpg",
      title: "Annapurna Circuit",
      description: "Talk to local people and explore the culture",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "7 Days",
      rating: 5,
      featured: true,
      reviewers: 56,
    },
    {
      imageSrc: "/around.jpg",
      title: "Khumai Dadha",
      description: "Travel and Explore Nepal",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "9 Days",
      rating: 4,
      featured: true,
    },
    {
      imageSrc: "/ground.jpg",
      title: "Poonhill ",
      description: "Unleash the experience and explore the natural beauty.",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      featured: false,
    },
    {
      imageSrc: "/himalaya.jpg",
      title: "Gosaikunda Lake",
      description: "A magnificent lake to explore",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "12 Days",
      rating: 3,
      featured: true,
    },
    {
      imageSrc: "/man-standing.jpg",
      title: "Langtang Region",
      description: "Explore the country which lies on the lap of Himalayas ",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "9 Days",
      rating: 5,
      featured: true,
    },
    {
      imageSrc: "/mt-everest.jpg",
      title: "Everest Base Camp",
      description: "Wonder around the 8th wonder of the world",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "9 Days",
      rating: 4,
      featured: true,
    },
    {
      imageSrc: "/walk.jpg",
      title: "Manaslu Himal Trek",
      description:
        "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "9 Days",
      rating: 4,
      featured: true,
    },
    {
      imageSrc: "/hims.jpg",
      title: "Machapuchhre Base Camp",
      description:
        "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "9 Days",
      rating: 4,
      featured: false,
    },
  ];

  return (
    <div className="mt-24 px-5 lg:px-20">
      <div className="destinations__list-title flex flex-col md:flex-row text-center md:text-left items-center justify-center md:justify-between">
        <h5 className=" font-nunito regular-text">
          <strong className="semi__big-title  uppercase">
            Our{" "}
            <span className="text-blue font-extrabold">Recommendations </span>
          </strong>
        </h5>
        {/* <p className="regular-text mt-2 md:mt-0 relative">
          Need more Info? Contact us at:{" "}
          <strong className="text-blue-light_dark">
            <a href="tel: +977 9841368753">+977 9876543210</a>
          </strong>
        </p> */}
      </div>

      <Card>
        {recommendation &&
          recommendation.slice(0, 8).map((recom, index) =>
            recom.featured === true ? (
              <div className="dest__card-outer flex flex-col shadow-sm md:shadow-none rounded-lg">
                <div
                  className="dest__card-inner relative overflow-hidden rounded-t-lg md:rounded-lg"
                  key={index}
                >
                  <Link href="/package/1">
                    <Image
                      src={recom.imageSrc}
                      //   width={100}
                      //   height={100}
                      fill
                      style={{
                        width: "100%",
                        height: "100%",
                        // minHeight:'500px',
                        objectFit: "cover",
                        objectPosition: "center",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                      className="transition-all duration-1000 hover:scale-105"
                      alt={recom.title}
                    />
                  </Link>
                </div>
                <div className="reco__card-info px-4 bg-white-subtle lg:bg-white rounded-sm">
                  <div className="title-desc flex flex-col mt-3">
                    <Link href="/package/1" className="">
                      <p className="font-medium">
                        <small>Duration: {recom.duration}</small>
                      </p>
                    </Link>
                    <Link href="/package/1">
                      <p className="reco__card-title z-10 relative font-nunito text-black hover:text-blue transition-all duration-300">
                        {recom.title}
                      </p>
                    </Link>
                  </div>

                  <div className="pricing-rating flex flex-col justify-between min-h-[50px]">
                    <Rating stars={recom.rating} reviewers = {recom.reviewers} />
                    <div className="pricing flex gap-2 items-center text-blue">
                      <strong className="text-2xl font-lato">
                        <FaMoneyBill />
                      </strong>
                      <small className="font-nunito text-md font-bold">
                        {recom.pricingText}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
      </Card>
    </div>
  );
};

export default Recommended;
