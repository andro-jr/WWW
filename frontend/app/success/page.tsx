import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl">Thank You</h2>
        <span className="text-center mt-2">
          Your order has been recieved, we will contact you shortly{" "}
        </span>
          <Link href="/" className="text-blue font-bold text-sm">
            Go to homepage
          </Link>
      </div>
    </div>
  );
};

export default page;
