import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdHeight } from "react-icons/md";
import { usePathname } from "next/navigation";

const Card = ({ children }: any) => {
  return (
    <div>
      {/* <div className="destinations__list mt-16 px-5 lg:px-20">
        <div className="destinations__list-title flex items-center justify-between">
          <h5 className=" font-nunito regular-text">
            <strong className="regular-title uppercase">
              Trek and Explore{" "}
            </strong>
          </h5>
          <p className="regular-text">
            Need more Info? Contact us at:{" "}
            <strong className="text-blue-light_dark">
              <a href="tel: +977 9841368753">+977 9841368753</a>
            </strong>
          </p>
        </div> */}

      <div className="destination__image mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6 lg:gap-8 items-center">
        {children}
      </div>
    </div>
    // </div>
  );
};

export default Card;
