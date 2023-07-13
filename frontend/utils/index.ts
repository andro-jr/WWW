import axios from "./axios";
import { PackageParamsProps } from "@/types";

export const fetchPackages = async () => {
  try {
    const response = await axios.get(`/package/all`);

    const { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSinglePackage = async (packageId: string | number) => {
  try {
    const response = await axios.get(`/package/all`);
    const { data } = response;
    const packages = data;
    const singlePackage = packages.filter((pack: any, index: number) => {
      return +packageId === +pack.id;
    });
    // console.log(singlePackage);
    return singlePackage;
  } catch (error) {
    console.log(error);
  }
};

export const registerApi = async (payload: any) => {
  try {
    const response = await axios.post("/user/register", payload);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("Registeration failed");
  }
};

export const validateOtp = async (payload: any) => {
  console.log(payload);
  try {
    console.log("test")
    const response = await axios.post("/user/verify-email", payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
