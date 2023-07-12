"use client";
import React, { useState, useEffect } from "react";

import { Card, Rating } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { fetchPackages } from "@/utils";

const Recommended = () => {
  const [allPackages, setAllPackages] = useState([]);
  console.log(allPackages);

  const getAllPackages = async () => {
    try {
      const pack = await fetchPackages();
      // console.log(pack);
      setAllPackages(pack);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

  const recommended = allPackages.filter(
    (pack) => pack.hasOwnProperty("recommended") && pack.recommended === true
  );


  console.log(recommended);

  return (
    <div className="mt-24 px-5 lg:px-20">
      {recommended.length !== 0 ? (
        <div>
          <div className="destinations__list-title flex flex-col md:flex-row text-center md:text-left items-center justify-center md:justify-between">
            <h5 className=" font-nunito regular-text">
              <strong className="semi__big-title  uppercase">
                Our{" "}
                <span className="text-blue font-extrabold">
                  Recommendations{" "}
                </span>
              </strong>
            </h5>
          </div>

          <Card>
            {recommended.slice(0, 8).map((recom, index) => (
              <div
                className="dest__card-outer flex flex-col shadow-sm md:shadow-none rounded-lg"
                key={index}
              >
                <div className="dest__card-inner relative overflow-hidden rounded-t-lg md:rounded-lg">
                  <Link href={`/packages/${recom.id}`}>
                    <Image
                      src={recom.featuredImg}
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
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                      className="transition-all duration-1000 hover:scale-105"
                      alt={recom.title}
                    />
                  </Link>
                </div>
                <div className="reco__card-info px-4 bg-white-subtle lg:bg-white rounded-sm">
                  <div className="title-desc flex flex-col mt-3">
                    <Link href={`/packages/${recom.id}`} className="">
                      <p className="font-medium">
                        <small>Duration: {recom.days}</small>
                      </p>
                    </Link>
                    <Link href={`/packages/${recom.id}`}>
                      <p className="reco__card-title z-10 relative font-nunito text-black hover:text-blue transition-all duration-300">
                        {recom.title}
                      </p>
                    </Link>
                  </div>

                  <div className="pricing-rating flex flex-col justify-between min-h-[50px]">
                    {/* <Rating
                        stars={recom.rating}
                        reviewers={recom.reviewers}
                      /> */}
                    <div className="pricing flex gap-2 items-center text-blue">
                      <strong className="text-2xl font-lato">
                        <FaMoneyBill />
                      </strong>
                      <small className="font-nunito text-md font-bold">
                        {recom.price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Recommended;
