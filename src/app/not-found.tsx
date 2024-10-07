import React from "react";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-white">
        <Image
          src="/404.svg"
          alt="Not Found"
          className="w-full h-full"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Custom404;
