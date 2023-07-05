import React from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const DestinationList = () => {
  const destination = [
    {
      imageSrc: "/1.jpg",
      title: "Annapurna Circuit",
      description:
        "Talk to local people and explore the culture. Talk to local people and explore the culture Talk to local people and explore the culture",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: "/2.jpg",
      title: "Khumai Dadha",
      description:
        "Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world Wonder around the 8th wonder of the world",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: "/3.jpg",
      title: "Poonhill ",
      // description: "Travel and Explore Nepal with beautiful culture",
      description: "Travel and Explore Nepal",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: "/4.jpg",
      title: "Everest Base Camp",
      description:
        "Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty, Unleash the experience and explore the natural beauty",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: "/2.jpg",
      title: "Everest Base Camp",
      description: "A magnificent lake to explore",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
  ];

  return (
    <div className="destinations__list mt-16 px-5 lg:px-20 flex flex-col">
      <div className="destinations__list-title flex flex-col text-center items-center justify-center">
        <h5 className=" font-nunito regular-text">
          <strong className="big-title">
            <span className="text-blue uppercase font-black">Top Treks</span> to
            Explore
          </strong>
        </h5>
        <p className="regular-text mt-2 md:mt-10 max-w-[700px]">
          Explore our top treks voted by more than 1000+ customers around the
          world. From beginner friendly to the hardest.
        </p>

        <Link
          href="/packages"
          className="mt-10 text-black link-line flex items-center justify-between"
        >
          All Treking Destinations&nbsp; →
        </Link>
      </div>

      <Card>
        {destination &&
          destination.slice(0, 4).map((dest, index) => (
            <div className="dest__card-outer flex flex-col shadow-sm md:shadow-none rounded-lg">
              <div
                className="dest__card-inner relative  overflow-hidden rounded-t-lg md:rounded-lg"
                key={index}
              >
                <Link href="/package/1">
                  <Image
                    src={dest.imageSrc}
                    //   width={100}
                    //   height={100}
                    fill
                    style={{
                      width: "100%",
                      height: "100%",
                      // minHeight:'500px',
                      objectFit: "cover",
                      objectPosition: "center",
                      borderTopLeftRadius: "0.75rem",
                      borderTopRightRadius: ".75rem",
                    }}
                    className="transition-all duration-1000 hover:scale-105"
                    alt={dest.title}
                  />
                </Link>
              </div>
              <div className="dest__card-info px-4  bg-white-subtle lg:bg-white rounded-sm">
                <Link href="/package/1">
                  <p className="dest__card-title z-10 relative  text-black hover:text-blue transition-all duration-400">
                    {dest.title}
                  </p>
                </Link>
                <Link href="/package/1" className="">
                  <p className="line-clamp-2 text-black hover:text-black-gray transition-all duration-300">
                    {dest.description}
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </Card>
    </div>
  );
};

export default DestinationList;
