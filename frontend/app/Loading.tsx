import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Image src="/loading.gif" alt="" width={300} height={300} />
    </div>
  );
};

export default Loading;
