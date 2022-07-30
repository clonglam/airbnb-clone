import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/banner";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import ExploreNearby from "../components/exploreNearby";
import { exporeDataType, cardDataType } from "../interfaces";
import LiveAnywhere from "../components/liveAnywhere";
import LargeCard from "../components/largeCard";
import Footer from "../components/footer";

interface Props {
  exporeData: exporeDataType[];
  cardData: cardDataType[];
}
export default function Home({ exporeData, cardData }: Props) {
  const { user, loading } = useFetchUser();
  return (
    <div className="">
      <Head>
        <title> Airbnb</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Layout user={user} loading={loading}>
        <Banner />
        <ExploreNearby exporeData={exporeData} />
        <LiveAnywhere cardData={cardData} />
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
        <Footer />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://links.papareact.com/pyp");
  const exporeData = (await res.json()) as exporeDataType[];

  const cardRes = await fetch("https://links.papareact.com/zp1");
  const cardData = (await cardRes.json()) as cardDataType[];

  return {
    props: { exporeData, cardData },
  };
}
