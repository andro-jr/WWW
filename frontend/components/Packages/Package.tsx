import React from "react";
import Card from "../Card";
import Link from "next/link";
import Image from "next/image";
import Rating from "../Rating";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiClock } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Package = () => {
  const packages = [
    {
      id: "1",
      imageSrc: "/1.jpg",
      title: "Annapurna Circuit",
      description:
        "Talk to local people and explore the culture. Talk to local people and explore the culture Talk to local people and explore the culture",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 4,
      reviewers: 5,
      seasons: "Jan - Mar",
      duration: "5 days 4 nights",
      featured: true,
    },
    {
      id: "2",
      imageSrc: "/2.jpg",
      title: "Khumai Dadha",
      description:
        "Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 5,
      seasons: "Jan - Mar",
      duration: "5 days 4 nights",
      reviewers: 9,
      featured: false,
    },
    {
      id: "3",
      imageSrc: "/3.jpg",
      title: "Poonhill ",
      // description: "Travel and Explore Nepal with beautiful culture",
      description: "Travel and Explore Nepal",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 5,
      seasons: "Jan - Mar",
      duration: "5 days 4 nights",
      reviewers: 7,
      featured: false,
    },
    {
      id: "4",
      imageSrc: "/4.jpg",
      title: "Everest Base Camp",
      description:
        "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "5 days 4 nights",
      seasons: "Jan - Mar",
      Rating: 5,
      reviewers: 2,
      featured: true,
    },
    {
      id: "5",
      imageSrc: "/2.jpg",
      title: "Everest Base Camp",
      description: "A magnificent lake to explore",
      pricingText: "USD 80/Day",
      duration: "5 days 4 nights",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 5,
      seasons: "Jan - Mar",
      reviewers: 1,
      featured: false,
    },

    {
      id: "4",
      imageSrc: "/4.jpg",
      title: "Everest Base Camp",
      description:
        "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "5 days 4 nights",
      seasons: "Jan - Mar",
      Rating: 5,
      reviewers: 2,
      featured: false,
    },
    {
      id: "5",
      imageSrc: "/2.jpg",
      title: "Everest Base Camp",
      description: "A magnificent lake to explore",
      pricingText: "USD 80/Day",
      duration: "5 days 4 nights",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 5,
      seasons: "Jan - Mar",
      reviewers: 1,
      featured: true,
    },

    {
      id: "1",
      imageSrc: "/1.jpg",
      title: "Annapurna Circuit",
      description:
        "Talk to local people and explore the culture. Talk to local people and explore the culture Talk to local people and explore the culture",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 4,
      reviewers: 5,
      seasons: "Jan - Mar",
      duration: "5 days 4 nights",
      featured: false,
    },
    {
      id: "2",
      imageSrc: "/2.jpg",
      title: "Khumai Dadha",
      description:
        "Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 5,
      seasons: "Jan - Mar",
      duration: "5 days 4 nights",
      reviewers: 9,
      featured: true,
    },
    {
      id: "3",
      imageSrc: "/3.jpg",
      title: "Poonhill ",
      // description: "Travel and Explore Nepal with beautiful culture",
      description: "Travel and Explore Nepal",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 5,
      seasons: "Jan - Mar",
      duration: "5 days 4 nights",
      reviewers: 7,
      featured: false,
    },
    {
      id: "4",
      imageSrc: "/4.jpg",
      title: "Everest Base Camp",
      description:
        "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "5 days 4 nights",
      seasons: "Jan - Mar",
      Rating: 5,
      reviewers: 2,
      featured: false,
    },
    {
      id: "5",
      imageSrc: "/2.jpg",
      title: "Everest Base Camp",
      description: "A magnificent lake to explore",
      pricingText: "USD 80/Day",
      duration: "5 days 4 nights",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 5,
      seasons: "Jan - Mar",
      reviewers: 1,
      featured: false,
    },

    {
      id: "4",
      imageSrc: "/4.jpg",
      title: "Everest Base Camp",
      description:
        "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
      duration: "5 days 4 nights",
      seasons: "Jan - Mar",
      Rating: 5,
      reviewers: 2,
      featured: false,
    },
    {
      id: "5",
      imageSrc: "/2.jpg",
      title: "Everest Base Camp",
      description: "A magnificent lake to explore",
      pricingText: "USD 80/Day",
      duration: "5 days 4 nights",
      features: ["Free Wifi", "Free breakfast"],
      Rating: 5,
      seasons: "Jan - Mar",
      reviewers: 1,
      featured: false,
    },
  ];

  const hasFeatured = packages.filter(
    (pack) => pack.hasOwnProperty("featured") && pack.featured === true
  );

  const notFeatured = packages.filter(
    (pack) => pack.hasOwnProperty("featured") && pack.featured === false
  );

  return (
    <div>
      <div
        className="w-full min-h-[50vh] px-5 md:px-20  flex items-center justify-center package__overlay"
        style={{
          backgroundImage: "url('/3.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-white drop-shadow-md text-6xl font-extrabold text-center z-20">
          Packages
        </h2>
      </div>

      <div className="max-w-[1500px] mx-auto">
        <div className=" my-24 mt-10 px-5 lg:px-20 flex flex-col">
          {/* <h3 className="mt-4 text-4xl font-black text-blue feature font-lato">
            Featured Packages
          </h3> */}

          <div className="destination__image mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6 lg:gap-8 items-center">
            {hasFeatured &&
              hasFeatured.map((pack, index) => (
                <div>
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
                      <Link href="/package/1">
                        <Image
                          src={pack.imageSrc}
                          //   width={100}
                          //   height={100}
                          fill
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

                      {pack.featured ? (
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
                      <Link href="/package/1">
                        <p className="dest__card-title z-10 relative  text-black hover:text-blue transition-all duration-400">
                          {pack.title}
                        </p>
                      </Link>
                      <Rating stars={pack.Rating} reviewers={pack.reviewers} />
                      <div className="pack__duration flex items-center justify-start gap-3 font-sm">
                        <FiClock className="text-blue" />
                        <p className="text-sm font-nunito font-bold text-black-60">
                          {pack.duration}
                        </p>
                      </div>

                      <div className="pack__price  mt-2">
                        {pack.pricingText ? (
                          <div className="flex items-center justify-start gap-3">
                            <strong className="">
                              <IoPricetagsOutline className="text-blue " />
                            </strong>
                            <small className="font-bold font-nunito text-black-60">
                              {pack.pricingText}
                            </small>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="best__seasons  mt-2">
                        {pack.seasons ? (
                          <div className="flex items-center justify-start gap-3 ">
                            <strong className="text-blue">
                              <TiWeatherPartlySunny />
                            </strong>

                            <p className="text-sm font-bold font-nunito text-black-60">
                              {pack.seasons}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="link">
                        <Link
                          href=""
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

          <h3 className="mt-20 text-3xl font-black text-blue">Our Packages</h3>
          <div className="destination__image mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6 lg:gap-8 items-center">
            {notFeatured &&
              notFeatured.map((pack, index) => (
                <div
                  className="dest__card-outer flex flex-col shadow-sm md:shadow-md rounded-lg"
                  key={index}
                >
                  <div
                    className="pack__card-inner relative overflow-hidden rounded-t-lg md:rounded-t-none"
                    style={{
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: ".5rem",
                      overflow: "hidden",
                    }}
                    key={index}
                  >
                    <Link href="/package/1">
                      <Image
                        src={pack.imageSrc}
                        //   width={100}
                        //   height={100}
                        fill
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

                    {pack.featured ? (
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
                    <Link href="/package/1">
                      <p className="dest__card-title z-10 relative  text-black hover:text-blue transition-all duration-400">
                        {pack.title}
                      </p>
                    </Link>
                    <Rating stars={pack.Rating} reviewers={pack.reviewers} />
                    <div className="pack__duration flex items-center justify-start gap-3 font-sm">
                      <FiClock className="text-blue" />
                      <p className="text-sm font-nunito font-bold text-black-60">
                        {pack.duration}
                      </p>
                    </div>

                    <div className="pack__price  mt-2">
                      {pack.pricingText ? (
                        <div className="flex items-center justify-start gap-3">
                          <strong className="">
                            <IoPricetagsOutline className="text-blue " />
                          </strong>
                          <small className="font-bold font-nunito text-black-60">
                            {pack.pricingText}
                          </small>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="best__seasons  mt-2">
                      {pack.seasons ? (
                        <div className="flex items-center justify-start gap-3 ">
                          <strong className="text-blue">
                            <TiWeatherPartlySunny />
                          </strong>

                          <p className="text-sm font-bold font-nunito text-black-60">
                            {pack.seasons}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="link">
                      <Link
                        href=""
                        className="text-blue flex items-center justify-start gap-2 font-bold text-md mt-4 font-nunito"
                      >
                        Details <HiArrowLongRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
