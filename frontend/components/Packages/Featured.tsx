"use client";
import React, { useState, useEffect } from "react";
import { fetchPackages } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoPricetagsOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

const Featured = () => {
  const [allPackages, setAllPackages] = useState<any[]>([]);
  const [backgroundImage, setBackgroundImage] = useState("");

  const getAllPackages = async () => {
    try {
      const pack = await fetchPackages();
      // console.log(pack);
      setAllPackages(pack);
      setBackgroundImage(pack[0].featuredImg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

  const hasFeatured = allPackages.filter(
    (pack) =>
      pack.hasOwnProperty("includeInFeatured") &&
      pack.includeInFeatured === true
  );

  let hasFeaturedMonths: String[] = hasFeatured.map(
    (pack, index) => pack.bestSeason
  );

  let bestSeasonFeatured = hasFeaturedMonths.map((months, index) => {
    let monthArray = months.split("-");
    let trimmedArray = monthArray.map((month) => month.substring(0, 3));
    return trimmedArray.join("-");
  });

  return (
    <div className="destination__image mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6 lg:gap-8 items-center">
      {hasFeatured &&
        hasFeatured.map((pack, index) => (
          <div key={pack.id}>
            <div className="dest__card-outer flex flex-col shadow-sm md:shadow-md rounded-lg">
              <div
                className="pack__card-inner relative overflow-hidden rounded-t-lg md:rounded-t-none"
                style={{
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: ".5rem",
                  overflow: "hidden",
                }}
                key={index}
              >
                <Link href={`/packages/${pack.id}`}>
                  <Image
                    src={pack.featuredImg}
                    //   width={100}
                    //   height={100}
                    fill
                    sizes="100%"
                    style={{
                      width: "100%",
                      height: "100%",
                      // minHeight:'500px',
                      objectFit: "cover",
                      objectPosition: "center",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: ".5rem",
                    }}
                    className="transition-all duration-1000 hover:scale-105"
                    alt={pack.title}
                  />
                </Link>

                {pack.includeInFeatured ? (
                  <div className="featured-tag bg-red">
                    <span>Featured</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div
                className="dest__card-info p-4  bg-white-subtle lg:bg-white rounded-sm"
                style={{
                  borderBottomLeftRadius: "0.5rem",
                  borderBottomRightRadius: ".5rem",
                }}
              >
                <Link href={`/packages/${pack.id}`}>
                  <p className="dest__card-title z-10 relative  text-black hover:text-blue transition-all duration-400">
                    {pack.title}
                  </p>
                </Link>
                {/* <Rating stars={pack.rating} reviewers={pack.reviewers} /> */}
                <div className="pack__duration flex items-center justify-start gap-3 font-sm mt-4">
                  <FiClock className="text-blue" />
                  <p className="text-sm font-nunito font-bold text-black-60">
                    {pack.days}
                  </p>
                </div>

                <div className="pack__price  mt-2">
                  {pack.price ? (
                    <div className="flex items-center justify-start gap-3">
                      <strong className="">
                        <IoPricetagsOutline className="text-blue " />
                      </strong>
                      <small className="font-bold font-nunito text-black-60">
                        {pack.price}
                      </small>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="best__seasons  mt-2">
                  {pack.bestSeason ? (
                    <div className="flex items-center justify-start gap-3 ">
                      <strong className="text-blue">
                        <TiWeatherPartlySunny />
                      </strong>

                      <p className="text-sm font-bold font-nunito text-black-60">
                        {bestSeasonFeatured[index]}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="link">
                  <Link
                    href={`/packages/${pack.id}`}
                    className="text-blue flex items-center justify-start gap-2 font-bold text-md mt-4 font-nunito"
                  >
                    Details <HiArrowLongRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Featured;
