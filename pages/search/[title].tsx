import React from "react";
import { searchDataType } from "../../interfaces";
import Header from "../../components/header";
import Footer from "../../components/footer";
import RoomHeader from "../../components/rooms/roomHeader";
import RoomBody from "../../components/rooms/roomBody";
import RoomCard from "../../components/rooms/roomCard";

interface Props {
  searchData: searchDataType[];
  roomData: searchDataType;
}

const Rooms = ({ roomData, searchData }: Props) => {
  const { img, location, title, description, star, price, total, long, lat } =
    roomData;

  return (
    <>
      <Header />

      <div className="md:container md:mx-auto bg-gray-50">
        <RoomHeader title={title} star={star} img={img} location={location} />

        <div className="flex">
          <RoomBody location={location} title={title} star={star} />
          <div>
            <RoomCard />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Rooms;

export async function getstaticPath() {
  const searchRes = await fetch("https://links.papareact.com/isz");
  const searchData = (await searchRes.json()) as searchDataType[];

  const path = searchData.map((item) => ({
    params: { title: item.title },
  }));

  return {
    path,
    fallback: false,
  };
}
export async function getServerSideProps({ params }) {
  const searchRes = await fetch("https://links.papareact.com/isz");
  const searchData = (await searchRes.json()) as searchDataType[];

  const roomData = searchData.find((room) => room.title === params.title);

  return {
    props: {
      roomData,
      searchData,
    },
  };
}
