import React, { Suspense } from "react";
import { Footer, Navbar, Package } from "@/components";
import Loading from "../Loading";

const page = () => {
  return (
    <div>
      <Navbar />
      
        <Package />

      
      <Footer />
    </div>
  );
};

export default page;
