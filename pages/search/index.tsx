import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { searchDataType } from "../../interfaces";
import InfoCard from "../../components/infoCard";
import { format } from "date-fns";
import Map from "../../components/map";

interface Props {
  searchData: searchDataType[];
}

const search = ({ searchData }: Props) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(
    new Date(startDate as string),
    "dd MMMM yy"
  );
  const formattedEndDate = format(new Date(endDate as string), "dd MMMM yy");

  const vacationPperiod = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header />
      <main className="flex">
        <section className="container mx-auto px-6 pt-14 flex-grow">
          <p className="text-xs">
            300+ Stays {vacationPperiod} for {noOfGuests} numbers of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button"> Cancellation Flexibility</p>
            <p className="button"> Type of Place </p>
            <p className="button"> Price </p>
            <p className="button"> Cancellation Flexibility</p>
          </div>

          <div className="flex flex-col">
            {searchData.map(
              ({
                title,
                location,
                description,
                star,
                price,
                total,
                img,
                long,
              }) => (
                <InfoCard
                  key={`searchData_${title}_${img}`}
                  title={title}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  img={img}
                  long={long}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden lg:block lg:min-w-[600px] overflow-hidden">
          <Map searchData={searchData} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const searchRes = await fetch("https://links.papareact.com/isz");
  const searchData = (await searchRes.json()) as searchDataType[];

  return {
    props: { searchData },
  };
}
