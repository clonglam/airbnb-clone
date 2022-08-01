import React from "react";
import Image from "next/image";
import { GiDesk } from "react-icons/gi";
import { BsDoorClosed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";

interface Props {
  location: string;
  title: string;
  star: number;
}

const RoomBody = ({ location, title, star }: Props) => {
  return (
    <div className="flex flex-col px-5 flex-grow">
      <div className="">
        <p className="text-2xl font-semibold w-60 md:w-full py-2">{location}</p>
        <p className="text-md "> 4 guests1 bedroom2 beds1 bath</p>
      </div>

      <div className="border-gray-150  border-b-2 py-5" />

      {/* Eniroment Gimick */}
      <div className="flex space-x-3 py-3">
        <GiDesk className="text-3xl" />
        <div className="flex-grow">
          <p className="font-bold text-xl">Great for remote work</p>
          <p className="font-light text-sm">
            Fast wifi at 219 Mbps, plus a dedicated workspace in a common area.
          </p>
        </div>
      </div>
      <div className="flex space-x-3 py-3">
        <BsDoorClosed className="text-3xl" />
        <div className="flex-grow">
          <p className="font-bold text-xl">Self check-in</p>
          <p className="font-light text-sm">
            Check yourself in with the keypad.
          </p>
        </div>
      </div>
      <div className="flex space-x-3 py-3">
        <AiOutlineCalendar className="text-3xl" />
        <div className="flex-grow">
          <p className="font-bold text-xl">Free cancellation for 48 hours</p>
        </div>
      </div>

      <div className="border-gray-150  border-b-2 py-5" />

      <div className="flex flex-col gap-5 py-5">
        <div className="relative w-48 h-10">
          <Image
            src={"/static/assest/aircover.webp"}
            alt="AirCover"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p>
          Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in.
        </p>
      </div>

      <div className="border-gray-150  border-b-2 py-5" />

      <div className="py-5">
        <p className="font-bold text-2xl text-gray-800">Where you'll sleep</p>
        <div className="flex space-x-4 py-3">
          <div className="flex flex-col space-y-1 w-full">
            <div className="relative aspect-[16/9] py-3 ">
              <Image
                src="/static/assest/bedroom.webp"
                layout="fill"
                objectFit="cover"
                alt="A bedroom Image"
                className="rounded-2xl"
              />
            </div>
            <p className="font-semibold text-gray-800 leading-4 ">Bedroom</p>
            <p className="font-light text-gray-800 leading-5 ">1 queen bed</p>
          </div>

          <div className="flex flex-col space-y-1 w-full">
            <div className="relative aspect-[16/9] py-3 ">
              <Image
                src="/static/assest/living_room.webp"
                layout="fill"
                objectFit="cover"
                alt="A bedroom Image"
                className="rounded-2xl"
              />
            </div>

            <p className="font-semibold text-gray-800 leading-4">Living room</p>
            <p className="font-light text-gray-800 leading-5">1 sofa bed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBody;
