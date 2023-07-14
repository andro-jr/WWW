"use client";
import { CustomButton } from "@/components";
import FormInput from "@/components/Form/FormInput";
import React, { useState } from "react";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { payment } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

const booking = ({ params }: any) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const packageName = searchParams.get("packagename");
  const price = searchParams.get("price");
  const useremail = Cookies.get("email");
  const userId = Cookies.get("id");
  const packageId = params.id;

  console.log(userId);

  const [inputData, setInputData] = useState({
    userId: userId,
    email: useremail,
    packagename: packageName,
    packageId: packageId,
    price: price,
    departureDate: "",
  });

  console.log(inputData);

  console.log(inputData);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    // console.log(name);
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!inputData.departureDate) {
      alert("Please select Departure Date");
    } else {
      const payload = {
        userId: inputData.userId,
        useremail: inputData.email,
        packagename: inputData.packagename,
        packageId: inputData.packageId,
        price: inputData.price,
        departureDate: inputData.departureDate,
      };
      console.log(payload);

      try {
        const response: any = await payment(payload);
        console.log(response);

        if (response.status === 200) {
          const url = response.data.url;
          console.log(url);
          router.push(`${url}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(packageId, packageName, useremail, userId, price);

  return (
    <div className="bg-white-toned md:bg-none w-screen h-screen flex items-center justify-center ">
      <div className="flex flex-col shadow-none md:shadow-md bg-white-toned p-16 w-[600px] rounded-lg">
        <div className="flex flex-col">
          <div className="desc__text flex flex-col items-center mt-4">
            {/* {error && (
                <div className="text-red text-sm font-bold mb-4">{error}</div>
              )} */}
            <span className="text-3xl text-black-gray mb-8 text-center font-bold">
              Book your Package
            </span>
          </div>
          <FormInput
            name="email"
            label="email"
            placeholder="enter email"
            type="text"
            defaultValue={useremail}
            readOnly={true}
            value={inputData}
            onChange={handleChange}
            style="max-w-[700px]"
          />
          <FormInput
            name="packageName"
            label="packageName"
            placeholder="enter package name"
            type="text"
            defaultValue={packageName}
            readOnly={true}
            value={inputData}
            onChange={handleChange}
            style="max-w-[700px]"
          />
          <FormInput
            name="price"
            label="price"
            placeholder="enter package price"
            type="text"
            defaultValue={price}
            value={inputData}
            readOnly={true}
            onChange={handleChange}
            style="max-w-[700px]"
          />
          <FormInput
            name="departureDate"
            label="departureDate"
            placeholder="choose departure date"
            type="date"
            value={inputData}
            onChange={handleChange}
            style="max-w-[700px]"
          />

          <CustomButton
            title="Book now"
            backgroundStyles="bg-blue px-20 py-4 rounded-md"
            textStyles="text-white"
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default booking;
