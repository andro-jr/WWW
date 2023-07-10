import axios from "./axios";

export const fetchPackages = async () => {
  try {
    const response = await axios.get(`/package/all`);
    const { data } = response;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
