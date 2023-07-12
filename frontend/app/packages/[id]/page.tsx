import { Footer, Navbar, PackageDetail } from "@/components";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1500px] mx-auto">
        <PackageDetail id={params.id} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
