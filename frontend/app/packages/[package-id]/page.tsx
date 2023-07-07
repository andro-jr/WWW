"use client";
import React from "react";
import { useParams } from "next/navigation";

const page = ({ params }: any) => {
  return <div>Package id: {params.packages} </div>;
};

export default page;
