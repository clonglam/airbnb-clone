import React from "react";
import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <div className="container mx-auto px-5 mt-5 cursor-pointer">
      <div className="relative">
        <div className="relative h-96 min-w-[300px] ">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        <div className="absolute top-32 left-12">
          <h3 className="text-4xl w-64 mb-3 font-bold">{title}</h3>
          <p className="">{description}</p>

          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-full mt-5">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
