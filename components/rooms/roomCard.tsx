import React from "react";
import { AiFillStar } from "react-icons/ai";

interface Props {}

const RoomCard = (props: Props) => {
  return (
    <div className=" border-gray-300 border-[1px] flex flex-col px-6 py-3 shadow-xl w-[350px] rounded-xl space-y-2">
      <div className="flex justify-between py-5">
        <p className="font-bold text-xl text-gray-800">
          $494 CAD <span className="font-normal text-lg">night</span>
        </p>
        <div className="flex items-center space-x-2">
          <AiFillStar /> <p>4.97</p>
        </div>
      </div>

      <div className="border-[0.5px] border-gray-400 rounded-xl ">
        <div className="flex border-b-[1px] border-gray-400 py-2 px-4">
          <div className="w-1/2">
            <p className="uppercase text-gray-800 font-semibold text-sm">
              Check-in
            </p>
            <p className=" text-gray-800 font-light text-xs">08-17-2022</p>
          </div>

          <div className="w-1/2 pl-3 border-l-[1px] border-gray-400 ">
            <p className="uppercase text-gray-800 font-semibold text-sm">
              Check-out
            </p>
            <p className=" text-gray-800 font-light text-xs">08-17-2022</p>
          </div>
        </div>

        <div className="grid-cols-2 py-2 px-4">
          <p className="uppercase text-gray-800 font-semibold text-sm">
            Guests
          </p>
          <p className=" text-gray-800 font-light text-xs">1 guest</p>
        </div>
      </div>

      {/* Check availabilt */}
      <button
        className="font-bold bg-red-400 text-white shadow:sm rounded-xl px-5 py-3 cursor-pointer
      hover:shadow-xl hover:bg-red-500"
      >
        Reserve
      </button>
      <p className="mx-auto text-gray-500 text-sm">You won't be charged yet</p>

      <div className="flex flex-col space-y-3 pb-3 border-b-[1px] border-gray-300">
        <div className="flex justify-between">
          <p className="text-sm text-gray-600 underline">
            {" "}
            $494 CAD x 6 nights
          </p>
          <p className="text-sm text-gray-700  font-semibold text-right">
            $2,962 CAD
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-600 underline"> Cleaning fee</p>
          <p className="text-sm text-gray-700  font-semibold text-right">
            $179 CAD
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-600 underline"> Service fee</p>
          <p className="text-sm text-gray-700  font-semibold text-right">
            $466 CAD
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-600 underline">
            {" "}
            Occupancy taxes and fees
          </p>
          <p className="text-sm text-gray-700  font-semibold text-right">
            $408 CAD
          </p>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between py-3">
        <p className="text-sm text-gray-800 font-bold">Total</p>
        <p className="text-sm text-gray-800  font-bold text-right">
          $4,015 CAD
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
