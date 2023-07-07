import React from "react";
import Image from "next/image";
import { FaCarSide, FaHotel } from "react-icons/fa";

const service = () => {
  const services = [
    {
      imgSrc: "/safety.svg",
      details:
        "Measures in Place to Help Keep You Safe From The Moment You Book to the Moment You (Reluctantly) Head Home.",
    },
    {
      imgSrc: "/route.svg",
      details:
        "Get a Personalized Trip. Based on Your Preferences. Customize It. Refine it. We'll find the Best Routes & Schedules.",
    },

    {
      imgSrc: "/food.svg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolores?",
    },
    {
      imgSrc: "/guide.svg",
      details:
        "To Empower the Local People for the Sustainable Eco-Tourism and Support the School Children for Bright Future.",
    },
  ];

  return (
    <div className="services my-24 px-5 lg:px-20 flex justify-center items-center">
      {/* 2 container of service  --------------- box - 1 */}
      <div className="service__container">
        {/* title container  */}
        <div className="service-title">
          <h2 className="text-4xl font-extrabold">Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem delectus sequi voluptatum doloremque dolores sit.
          </p>
        </div>

        {/* title container  */}

        {/* title container services */}
        <div className="service__container-service">
          {/* service__container-box  */}
          {services.slice(0,4).map((service, index) => (
            <div className="service__container-service-box">
            <div className="service__container-box-image">
              <Image src={service.imgSrc} width={120} height={120} alt="" />
            </div>
            <div className="service__container-box-detail">
              <p className="line-clamp-2">
                {service.details}
              </p>
            </div>
          </div>
          ))}
          

          {/* service__container-box  */}


        </div>
        
      </div>

      {/* 2 container of service  --------------- box - 2 */}
      <div className="service__image">
        <Image
          src="/man-standing.jpg"
          fill
          className="service-image rounded-md"
          alt=""
        />
        <div className="service__banner">
          <div className="service__banner-info  h-full flex items-center justify-center">
            {/* <span>Sale</span> */}
            <p className="text-lg font-bold font-nunito">Upto 10% Off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
