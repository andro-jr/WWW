// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='bg-green flex items-center justify-center' id='hero'>

//     </div>
//   )
// }

// export default Hero
"use client";

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="bg-primary flex flex-col items-center justify-center border-2 border-green">
            <h3 className="border-2 border-black flex flex-col items-center justify-center">Experience Mountains</h3>
            <p>Heaven is Myth. Nepal is real</p>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
