import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  title: string;
}

const MediumCard = ({ title, img }: Props) => {
  return (
    <div className="cursor-pointer transform transition  duration-200 ease-out hover:scale-105 rounded-lg">
      <div className="relative h-80 w-80 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-2xl mt-3">{title} </h3>
    </div>
  );
};

export default MediumCard;
