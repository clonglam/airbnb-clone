import React from "react";
import SmallCard from "../components/smallCard";
import { exporeDataType } from "../interfaces";
import { useRouter } from "next/router";

interface Props {
  exporeData: exporeDataType[];
}

const ExploreNearby = ({ exporeData }: Props) => {
  const router = useRouter();
  return (
    <>
      <div className="container mx-auto mt-5 p-5">
        <h2 className="text-3xl font-bold"> Explore Nearby</h2>
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {exporeData?.map(({ img, location, distance }) => (
            <SmallCard
              key={`exporeCard_${location}`}
              img={img}
              location={location}
              distance={distance}
              onClickHandler={() =>
                router.push({
                  pathname: "/search",
                  query: {
                    location: location,
                    startDate: new Date().toISOString(),
                    endDate: new Date().toISOString(),
                    noOfGuest: 1,
                  },
                })
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreNearby;
