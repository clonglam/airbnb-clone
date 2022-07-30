import React from "react";
import Image from "next/image";

interface Props {
  img: string;
  location: string;
  distance: string;
}

const SmallCard = ({ img, location, distance }: Props) => {
  return (
    <div
      className="flex items-center flex-column hover:scale-105 bg-white
    cursor-pointer m-2 mt-5 space-x-4 transition-all duration-200 ease-out hover:shadow-lg hover:bg-gray-50"
    >
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h2>{location}</h2>
        <h2 className="text-gray-500">{distance}</h2>
      </div>
    </div>
  );
};
export default SmallCard;
