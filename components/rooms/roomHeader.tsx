import React from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

interface Props {
  star: number;
  title: string;
  img: string;
  location: string;
}

const RoomHeader = ({ title, star, img, location }: Props) => {
  return (
    <div className="flex flex-col md:mt-5 md:py-5">
      <div className="mb-5 px-5">
        <h3 className="text-4xl font-semibold"> {title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AiFillStar /> {star}
          </div>
          <div>
            <AiOutlineHeart /> Save
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-video mb-5 order-first md:order-none">
        <Image
          src={img}
          alt={`${location}_img`}
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="border-gray-150  border-b-2 mb-5 md:hidden" />
    </div>
  );
};

export default RoomHeader;
