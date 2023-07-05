"use client";
import React, { Component, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CustomButton from "./CustomButton";

// const TripCollection = () => {
//   return <div>

//   </div>;
// };

// export default TripCollection;

export default class TripCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const hotelCards = [
      {
        imageSrc: "/flags.jpg",
        title: "Annapurna Circuit",
        description: "Talk to local people and explore the culture",
        pricingText: "USD 50/Day",
        features: ["Free Wifi", "Free breakfast"],
      },
      {
        imageSrc: "/around.jpg",
        title: "Khumai Dadha",
        description: "Travel and Explore Nepal",
        pricingText: "USD 80/Day",
        features: ["Free Wifi", "Free breakfast"],
      },
      {
        imageSrc: "/ground.jpg",
        title: "Poonhill ",
        description: "Unleash the experience and explore the natural beauty.",
        pricingText: "USD 80/Day",
        features: ["Free Wifi", "Free breakfast"],
      },
      {
        imageSrc: "/himalaya.jpg",
        title: "Gosaikunda Lake",
        description: "A magnificent lake to explore",
        pricingText: "USD 80/Day",
        features: ["Free Wifi", "Free breakfast"],
      },
      {
        imageSrc: "/man-standing.jpg",
        title: "Langtang Region",
        description: "Explore the country which lies on the lap of Himalayas ",
        pricingText: "USD 80/Day",
        features: ["Free Wifi", "Free breakfast"],
      },
      {
        imageSrc: "/mt-everest.jpg",
        title: "Everest Base Camp",
        description: "Wonder around the 8th wonder of the world",
        pricingText: "USD 80/Day",
        features: ["Free Wifi", "Free breakfast"],
      },
    ];

    return (
      <div className="overflow-hidden">
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          arrows={false}
          dots={false}
          infinite={true}
          autoplay={true}
          autoplaySpeed={10000}
          speed={1000}
          fade={true}
          slidesToScroll={1}
        >
          {hotelCards.slice(0, 6).map((card, index) => (
            <div>
              <div key={index}>
                <div className="min-h-[70vh] hero-image">
                  <Image
                    alt={hotelCards[index].title}
                    src={hotelCards[index].imageSrc}
                    fill
                    style={{ objectFit: "cover" }}
                    className="-z-10"
                  />
                </div>
              </div>
              <div className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full md:w-auto">
                <h1 className="text-3xl md:text-7xl font-black text-white drop-shadow-lg text-center">
                  <span className="text-4xl md:text-6xl">Explore</span> <br />
                  {hotelCards[index].title}
                </h1>
                <span className="text-center text-white drop-shadow-md mt-3">
                  {hotelCards[index].description}
                </span>
                <CustomButton
                  btnType="button"
                  title="Explore packages"
                  backgroundStyles="px-10 py-4 bg-blue rounded-md mt-4"
                  textStyles="font-normal text-white font-lato"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* ---------------------- second slider ---------------------- */}
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
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
          {hotelCards.map((card, index) => (
            <div>
              <div className="inner__slider-container overflow-hidden dis-flex py-8 px-4 gap-6">
                <div className="image-container " key={index}>
                  <Image
                    src={hotelCards[index].imageSrc}
                    width={300}
                    height={300}
                    objectFit="cover"
                    alt={hotelCards[index].title}
                    style={{maxWidth: '200px'}}
                    className="image-circle border"
                  />
                </div>
                <div className="trip__details">
                  <span className="font-bold font-nunito text-xl">
                    {hotelCards[index].title}
                  </span>
                  <p>{hotelCards[index].description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
