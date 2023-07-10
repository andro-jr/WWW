import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ stars, reviewers }: any) => {
  return (
    <div>
      <div className="rating flex py-3 gap-3 items-center justify-start">
        <div className="flex gap-0.5">
          {stars === 5 ? (
            <div className="flex gap-0.5">
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
            </div>
          ) : stars === 4 ? (
            <div className="flex gap-0.5">
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-black-light_gray" />
            </div>
          ) : stars === 3 ? (
            <div className="flex gap-0.5">
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
            </div>
          ) : stars === 2 ? (
            <div className="flex gap-0.5">
              <FaStar className="text-secondary" />
              <FaStar className="text-secondary" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
            </div>
          ) : stars === 1 ? (
            <div className="flex gap-0.5">
              <FaStar className="text-secondary" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
            </div>
          ) : (
            <div className="flex gap-0.5">
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
              <FaStar className="text-black-light_gray" />
            </div>
          )}
        </div>
        <div className="text-black-60 text-sm">
            (Bases on {reviewers} reviews)
        </div>
      </div>
    </div>
  );
};

export default Rating;
