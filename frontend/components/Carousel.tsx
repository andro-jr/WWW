"use client";
import React, { Component } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { CarouselProps } from "@/types";
import TripCollection from "./Hero/TripCollection";

export default class Carousel extends Component {
  // const Carousel = ({ title, subtitle }: CarouselProps) => {
  //   const [sliderRef, setSliderRef] = useState(null);
  // const title = ""

  render() {
    const hotelCards = [
      {
        imageSrc: "/flags.jpg",
        title: "panaroma",
        description: "Lorem ipsum dolor sit amet, consectur dolori",
        pricingText: "USD 50/Day",
        features: ["Free Wifi", "Free breakfast"],
      },
      {
        imageSrc: "/around.jpg",
        title: "golden-hour",
        description: "Lorem ipsum dolor sit amet, consectur dolori",
        pricingText: "USD 80/Day",
        features: ["Free Wifi", "Free breakfast"],
      },
    ];

    const sliderSettings = {
      fade: true,
      // centerMode: true,
      // centerPadding: "120px",

      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: "120px",
      arrows: false,
    };

    return (
      <div className="h-full">
        <div className="min-h-[65vh] overflow-x-hidden relative z-50">
          <Slider {...sliderSettings}>
            {hotelCards.map((card, index) => (
              <div key={index} className="min-h-[60vh] hero-image">
                <Image
                  alt={card.title}
                  src={card.imageSrc}
                  fill
                  style={{ objectFit: "cover" }}
                  className="-z-10"
                />
              </div>
            ))}
          </Slider>
          <div className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center ">
            <h1 className="text-6xl font-black text-white drop-shadow-lg text-center">
              {/* {this.title} */}
              Trek Nepal with Us
            </h1>
            <span className="text-center text-white drop-shadow-md mt-3">
              {/* {subtitle} */}
              Talk to locals, explore the culture
            </span>
            <CustomButton
              btnType="button"
              title="Explore packages"
              backgroundStyles="px-8 py-3 bg-blue rounded-full mt-4"
              textStyles="font-normal text-white font-lato"
            />
          </div>
        </div>

        <div>
          <TripCollection />
        </div>
      </div>
    );
  }
}
