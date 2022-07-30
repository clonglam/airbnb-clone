import React from "react";
import SmallCard from "../components/smallCard";
import { exporeDataType } from "../interfaces";

interface Props {
  exporeData: exporeDataType[];
}

const ExploreNearby = ({ exporeData }: Props) => {
  return (
    <>
      <div className="container mx-auto mt-5 p-5">
        <h2 className="text-2xl font-bold"> Explore Nearby</h2>
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {exporeData?.map(({ img, location, distance }) => (
            <SmallCard
              key={`exporeCard_${location}`}
              img={img}
              location={location}
              distance={distance}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreNearby;
