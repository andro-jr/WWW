"use client";
import React, { useState, useEffect } from "react";
import Card from "../Shared/Card";
import Link from "next/link";
import { fetchPackages } from "@/utils";
import Featured from "./Featured";
import NonFeatured from "./NonFeatured";

const Package = () => {
  const [allPackages, setAllPackages] = useState<any[]>([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  // console.log(allPackages);

  const getAllPackages = async () => {
    try {
      const pack = await fetchPackages();
      console.log(pack);
      setAllPackages(pack);
      setBackgroundImage(pack[0].featuredImg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

  console.log(backgroundImage);
  // console.log(bestSeasonNotFeatured);

  return (
    <div>
      {allPackages ? (
        <div>
          <div
            className="w-full min-h-[50vh] px-5 md:px-20  flex items-center justify-center package__overlay"
            style={{
              backgroundImage: `url(${backgroundImage})`,
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
              <Featured />

              <h3 className="mt-20 text-3xl font-black text-blue">
                Our Packages
              </h3>
              <NonFeatured />
            </div>
          </div>
        </div>
      ) : (
        "Currently no Packages are available."
      )}
    </div>
  );
};

export default Package;
