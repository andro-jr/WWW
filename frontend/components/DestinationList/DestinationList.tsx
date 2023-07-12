'use client';
import React, {useState, useEffect} from "react";
import Card from "../Shared/Card";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { fetchPackages } from "@/utils";

const DestinationList = () => {
  const [allPackages, setAllPackages] = useState<any[]>([]);
  // console.log(allPackages);

  const getAllPackages = async () => {
    try {
      const pack = await fetchPackages();
      console.log(pack);
      setAllPackages(pack);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

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
        {allPackages &&
          allPackages.slice(0, 4).map((dest, index) => (
            <div className="dest__card-outer flex flex-col shadow-sm md:shadow-none rounded-lg">
              <div
                className="dest__card-inner relative  overflow-hidden rounded-t-lg md:rounded-lg"
                key={index}
              >
                <Link href={`/packages/${dest.id}`}>
                  <Image
                    src={dest.featuredImg}
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
                      borderTopLeftRadius: "0.75rem",
                      borderTopRightRadius: ".75rem",
                    }}
                    className="transition-all duration-1000 hover:scale-105"
                    alt={dest.title}
                  />
                </Link>
              </div>
              <div className="dest__card-info px-4  bg-white-subtle lg:bg-white rounded-sm">
                <Link href={`/packages/${dest.id}`}>
                  <p className="dest__card-title z-10 relative  text-black hover:text-blue transition-all duration-400">
                    {dest.title}
                  </p>
                </Link>
                <Link href={`/packages/${dest.id}`} className="">
                  <p className="line-clamp-2 text-black hover:text-black-gray transition-all duration-300">
                    {dest.titleDesc}
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
