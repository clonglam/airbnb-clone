import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { DateRangePicker } from "react-date-range";
import UserLoginButton from "./userLoginButton";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState("1");

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Airbnb Clone By Clong Lam`}</title>
        <link rel="shortcut icon" href="/static/assest/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 bg-white py-5 shadow-md px-5">
        <div className="container grid grid-cols-3 mx-auto gap-5 items-center">
          {/* Site Logo */}
          <div className="relative flex my-auto cursor-pointer h-8 w-[200px]">
            <div className="block" onClick={() => router.push("/")}>
              <Image
                src="/static/assest/airbnb_logo_full.png"
                layout="fill"
                objectPosition="left"
                objectFit="contain"
                alt="airbnb_logo"
              />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex grow flex-row gap-3 items-center bg-white-900 rounded-full justify-between shadow-md border-2 h-10 py-5 px-2">
            <input
              className="ml-5 border-transparent outline-none w-full"
              type="text"
              placeholder="Where to ?"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <AiOutlineSearch
              color="white"
              className="bg-red-400 rounded-full cursor-pointer h-8 w-8 p-2 text-white "
            />
          </div>

          {/* Right side*/}
          <div className="flex flex-row justify-end gap-3 items-center h-8 ">
            <div
              className="rounded-full bg-white px-2 hover:bg-slate-50 hover:shadow-sm transition-all hidden md:block cursor-pointer"
              onClick={() =>
                router.push("https://github.com/clonglam/airbnb-clone")
              }
            >
              Become a Host
            </div>
            <TbWorld
              className="h-6 w-6 cursor-pointer hover:shadow-sm"
              onClick={() =>
                router.push("https://github.com/clonglam/airbnb-clone")
              }
            />

            <UserLoginButton />
          </div>

          {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
                showSelectionPreview={true}
                direction="horizontal"
                moveRangeOnFirstSelection={false}
                months={1}
              />

              <div className=" flex items-center justify-between border-b mb-4">
                <h3 className="text-2xl flex-grow font-semibold">
                  Number of Guest
                </h3>
                <FaUserAlt className="h-5" />
                <input
                  value={noOfGuest}
                  onChange={(e) => setNoOfGuest(e.target.value)}
                  type="number"
                  min={1}
                  className="text-xl w-12 ml-6 "
                />
              </div>

              <div className="flex">
                <button
                  className="flex-grow text-gray-500"
                  onClick={() => setSearchInput("")}
                >
                  Cancel
                </button>
                <button
                  className="flex-grow text-red-500"
                  onClick={() =>
                    router.push({
                      pathname: "/search",
                      query: {
                        location: searchInput,
                        startDate: startDate.toISOString(),
                        endDate: endDate.toISOString(),
                        noOfGuest,
                      },
                    })
                  }
                >
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
