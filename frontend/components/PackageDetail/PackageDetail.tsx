"use client";
import React, { useState, useEffect } from "react";
import { fetchSinglePackage } from "@/utils";
import { PackageParamsProps } from "@/types";
import { FiClock } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";
import CustomButton from "../Shared/CustomButton";
import { FcCheckmark } from "react-icons/fc";
import { MdDateRange } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import Faq from "../Faq";

const PackageDetail = ({ id }: any) => {
  const packageId = id;

  const [allPackages, setAllPackages] = useState<any[]>([]);
  const getSinglePackageDetail = async () => {
    try {
      const pack = await fetchSinglePackage(packageId);
      setAllPackages(pack[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const included = [
    {
      includes: [
        "All necessary airport arrival departure as per the itinerary.",
        "Hotel accommodation in sharing basis.",
        "Sightseeing by professional English-speaking tour guide.",
        "Private transportation for sightseeing (if possible).",
        "Domestic Flights Tickets for clients and guides to the destination.",
        "3 meals a day during the trekking (Breakfast, Lunch & Dinner) as mention in the itinerary with tea, or coffee during the trek.",
        "Professional government license holder English speaking trekking guide and his salary.",
        "Climbing guide, Equipment allowance, and his salary.",
        "Climbing guide Insurance.",
        "Foods, three times a day with tea, coffee & juice.",
        "Double occupancy tents above base camp.",
        "Personal tents in basecamp.",
        "Full base camp with dining tent, kitchen tent, pee tent & toilet tent.",
        "Group climbing equipment such as rope, ice screws, snow pickets, etc.",
        "The required number of porters to carry the luggage during the trek (We assign one porter for every two guests).",
        "Coverage of Guides and Porters, Their meals, insurance, transportation, flight, and other necessary equipment.",
        "Rural Municipality fee.",
        "Drinking water purification liquor or tablet.",
        "Welcome or Farewell dinner in Nepali Cultural Place.",
        "A comprehensive medical kit.",
        "All government and local taxes.",
        "Garbage deposit in Nepal Mountaineering Association (NMA).",
      ],
    },
  ];

  // const [show, setShow] = useState(null);

  // const handleClick = () => {
  //   if(show === null){
  //     setShow();
  //   }
  // }

  useEffect(() => {
    getSinglePackageDetail();
  }, []);

  return (
    <div>
      <div className="mt-10 mx-5 lg:mx-20 mb-20">
        <div className="package__header">
          <div className="package__title flex flex-col">
            <h2 className="text-4xl font-nunito font-extrabold text-black">
              {allPackages.title}
            </h2>
            <div className="package__title-info flex items-center gap-6 mt-2 text-black-80">
              <div className="duration flex items-center justify-between gap-3 mt-2">
                <span>
                  <FiClock className="font-bold text-xl" />
                </span>
                <span className="font-bold text-md">
                  {allPackages.days} Days
                </span>
              </div>
              <div className="location flex items-center gap-3 mt-2">
                <span>
                  <SlLocationPin className="font-bold text-xl" />
                </span>
                {/* <span>{allPackages.days} Days</span> */}
                <span className="font-bold text-md">{allPackages.title}</span>
              </div>
            </div>
          </div>

          <div className="package__options"></div>
        </div>

        <div className="packageDetail__container mt-10">
          <div className="package__detail">
            <div className="package__detail-image relative rounded-md overflow-hidden">
              <Image
                src={allPackages.featuredImg}
                alt=""
                fill
                className="w-full h-full cursor-pointer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <div className="pack__information mt-4">
              {/* ----------------------  overview -------------------------- */}
              <div className="pack__information-overview flex flex-col justify-center mb-8 pb-4">
                <span className="text-xl font-bold text-blue cursor-pointer p-4 pl-0 pr-10 pb-2">
                  Overview
                </span>
                <div
                  className="overview__container gap-4 pt-4 pb-8 mb-8"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}
                >
                  <div className="overview__container-box flex flex-col">
                    <span className="flex gap-3 items-start">
                      <MdDateRange className="text-2xl text-blue" />{" "}
                      <div className="flex flex-col gap-2">
                        <p className="font-bold">Travel Style: 1 - 4 people</p>
                        <p className="max-w-[300px] md:max-w-[350px] text-black-gray">
                          Fast, fresh and fun adventures that never slow down,
                          made for young budget-minded travellers.
                        </p>
                      </div>
                    </span>
                  </div>
                  <div className="overview__container-box flex flex-col">
                    <span className="flex gap-3 items-start">
                      <RiFilePaper2Line className="text-2xl text-blue" />{" "}
                      <div className="flex flex-col gap-2">
                        <p className="font-extrabold">Service Level: Basic</p>
                        <p className="max-w-[300px] md:max-w-[350px]  text-black-gray">
                          Fast, fresh and fun adventures that never slow down,
                          made for young budget-minded travellers.
                        </p>
                      </div>
                    </span>
                  </div>
                  <div className="overview__container-box flex flex-col">
                    <span className="flex gap-3 items-start">
                      <HiOutlineUserGroup className="text-2xl text-blue" />{" "}
                      <div className="flex flex-col gap-2">
                        <p className="font-extrabold">Trip Type: Small Group</p>
                        <p className="max-w-[300px] md:max-w-[350px]  text-black-gray">
                          Fast, fresh and fun adventures that never slow down,
                          made for young budget-minded travellers.
                        </p>
                      </div>
                    </span>
                  </div>
                  <div className="overview__container-box flex flex-col">
                    <span className="flex gap-3 items-start">
                      <BsShieldCheck className="text-2xl text-blue" />{" "}
                      <div className="flex flex-col gap-2">
                        <p className="font-extrabold">
                          Physical Rating: 2-Light
                        </p>
                        <p className="max-w-[300px] md:max-w-[350px]  text-black-gray">
                          Fast, fresh and fun adventures that never slow down,
                          made for young budget-minded travellers.
                        </p>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="pack__information-text mt-1">
                  <p className="pack__text" style={{ lineHeight: "170%" }}>
                    {allPackages.description}
                  </p>
                </div>
              </div>
              {/* ----------------------  overview -------------------------- */}
              {/* ----------------------  whats included -------------------------- */}
              <div className="pack__information-overview flex flex-col justify-center">
                <span className="text-xl font-bold text-blue cursor-pointer p-4 pl-0 pr-10 pb-2">
                  What's Included
                </span>
                <div className="pack__information-text mt-1">
                  <div className="pack__text">
                    <div>
                      <ul className="flex flex-col">
                        {included &&
                          included[0].includes.map((include, index) => (
                            <li
                              className="list-none flex gap-2 items-center justify-start"
                              style={{ lineHeight: "170%" }}
                              key={index}
                            >
                              <FcCheckmark />{" "}
                              <p className="max-w-[300px] md:max-w-none">{include}</p>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* ----------------------  overview -------------------------- */}
            </div>

            <div className="faqs mt-4">
              <span className="text-xl font-bold text-blue cursor-pointer p-4 pl-0 pr-10 pb-2">
                FAQs
              </span>
              <Faq />
            </div>
          </div>

          <div className="package__booking relative">
            <div className="package__booking-box p-6 flex flex-col shadow-md rounded-lg sticky top-28">
              <p className="font-extrabold text-2xl leading-normal">
                {allPackages.days} Days {allPackages.days - 1} Nights
              </p>
              <span className="text-md font-bold text-black-60 my-2">
                {allPackages.title}
              </span>
              <p className="text-md font-bold text-black-60 my-1">
                Cost Per Day{" "}
              </p>
              <span className="mb-4">
                <sup className="font-bold text-sm">Rs</sup>{" "}
                <strong className="font-bold text-2xl">
                  {(allPackages.price / allPackages.days).toString()}
                </strong>
              </span>
              <CustomButton
                title="Book Now"
                backgroundStyles="bg-blue py-4 rounded-md lg:rounded-full"
                textStyles="text-white"
              />

              <div className="departures mt-8 flex flex-col">
                <p className="text-black font-extrabold">Departures</p>
                {/* <span className=" text-blue ">Upcomming Departure - {allPackages.departure}</span> */}
                <span className=" text-blue text-sm font-bold mt-1">
                  Upcomming Departure - 15<sup>th</sup> July, 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
