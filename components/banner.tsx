import React from "react";
import Image from "next/image";

interface Props {}

const Banner = (props: Props) => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
      <Image
        layout="fill"
        objectFit="cover"
        src="http://links.papareact.com/0fm"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-xl lg:text-5xl font-bold text-black drop-shadow-xl ">
          Not sure where to go? Perfect.
        </p>
        <button
          className=" text-purple-500 bg-white px-10 py-4 shadow-lg rounded-full my-4 font-bold 
        hover:shadow-2xl hover:scale-105 active:scale-90 transition-all duration-200"
        >
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
