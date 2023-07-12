"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CustomButton from "../Shared/CustomButton";
import { fetchPackages } from "@/utils";

const TripCollection = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = useRef(null);
  let slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const [allPackages, setAllPackages] = useState<any[]>([]);
  // console.log(allPackages);

  const getAllPackages = async () => {
    try {
      const pack = await fetchPackages();
      setAllPackages(pack);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push("/packages");
  };

  return (
    <div className="overflow-hidden">
      <Slider
        asNavFor={nav2}
        ref={slider1}
        arrows={false}
        dots={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={10000}
        speed={1000}
        fade={true}
        slidesToScroll={1}
      >
        {allPackages &&
          allPackages.slice(0, 6).map((card, index) => (
            <div key={index}>
              <div>
                <div className="min-h-[70vh] hero-image">
                  <Image
                    alt={allPackages[index].title}
                    src={allPackages[index].featuredImg}
                    fill
                    style={{ objectFit: "cover" }}
                    className="-z-10"
                    priority={true}
                  />
                </div>
              </div>
              <div className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full md:w-auto">
                <h1 className="text-3xl md:text-7xl font-black text-white drop-shadow-lg text-center">
                  <span className="text-4xl md:text-6xl">Explore</span> <br />
                  {allPackages[index].title}
                </h1>
                <span className="text-center text-white drop-shadow-md mt-3">
                  {allPackages[index].titleDesc}
                </span>
                <CustomButton
                  btnType="button"
                  title="Explore packages"
                  backgroundStyles="px-10 py-4 bg-blue rounded-md mt-4"
                  textStyles="font-normal text-white font-lato"
                  handleClick={handleClick}
                />
              </div>
            </div>
          ))}
      </Slider>

      {/* ---------------------- second slider ---------------------- */}
      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={true}
        centerPadding="100px"
        arrows={false}
        dots={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={10000}
        speed={1000}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerPadding: "60px",
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: "50px",
              // initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "30px",
            },
          },
        ]}
      >
        {allPackages &&
          allPackages.map((card, index) => (
            <div key={index}>
              <div className="inner__slider-container overflow-hidden dis-flex py-8 px-4 gap-6">
                <div className="image-container ">
                  <Image
                    src={allPackages[index].featuredImg}
                    width={300}
                    height={300}
                    alt={allPackages[index].title}
                    style={{ maxWidth: "200px", objectFit: "cover" }}
                    className="image-circle border"
                    priority={true}
                  />
                </div>
                <div className="trip__details">
                  <span className="font-bold font-nunito text-xl">
                    {allPackages[index].title}
                  </span>
                  <p className="line-clamp-2">{allPackages[index].titleDesc}</p>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default TripCollection;
