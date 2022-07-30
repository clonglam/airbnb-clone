import React from "react";
import { cardDataType } from "../interfaces";
import MediumCard from "./mediumCard";

interface Props {
  cardData: cardDataType[];
}

const LiveAnywhere = ({ cardData }: Props) => {
  return (
    <div className="container mx-auto mt-5 p-5">
      <h2 className="text-3xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
        {cardData?.map(({ img, title }) => (
          <MediumCard key={`liveAnywhere_${title}`} title={title} img={img} />
        ))}
      </div>
    </div>
  );
};

export default LiveAnywhere;
