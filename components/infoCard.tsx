import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

interface Props {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  long: number;
  total: string;
}

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
}: Props) => {
  const router = useRouter();
  return (
    <div
      className="flex w-full border-b-2 py-7 cursor-pointer hover:opacity-80 hover:shadow-lg 
    transition duration ease-out first:border-t"
      onClick={() => router.push(`/search/${title}`)}
    >
      <div className="relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-gray-800 text-sm">{location}</p>
          <AiOutlineHeart className="cursor-pointer h-7" />
        </div>

        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-600 ">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <AiFillStar className="text-red-400 h-5" />
            {star}
          </p>

          <div>
            <p className="font-semibold text-lg pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight ">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
