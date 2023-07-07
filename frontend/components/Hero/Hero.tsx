"use client";
import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import FormInput from "../Form/FormInput";
import SearchBar from "../SearchBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from "../Carousel";
import TripCollection  from "./TripCollection";

const Hero = () => {
  return (
    <div className="overlay-radial ">
      {/* <Carousel
        // title="Trek Nepal with Us"
        // subtitle="Talk to locals, explore the culture"
      /> */}
      <TripCollection />
    </div>
  );
};

export default Hero;
