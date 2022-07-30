import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

type HeaderProps = {
  user?: any;
  loading: boolean;
};

const Header = ({ user, loading }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50  bg-white py-5 shadow-md">
      <div className="container flex flex-row justify-between mx-auto gap-5">
        <div className="relative flex items-center my-auto cursor-pointer grow-0 h-8 w-[200px]">
          <div className="block sm:hidden">
            <Image
              src="/static/assest/airbnb_logo_sm.png"
              layout="fill"
              objectPosition="left"
              objectFit="contain"
              alt="airbnb_logo_mobile"
            />
          </div>

          <div className=" hidden md:block lg:hidden">
            <Image
              src="/static/assest/airbnb_logo_sm.png"
              layout="fill"
              objectPosition="left"
              objectFit="contain"
              alt="airbnb_logo"
            />
          </div>

          <div className="hidden lg:block">
            <Image
              src="/static/assest/airbnb_logo_full.png"
              layout="fill"
              objectPosition="left"
              objectFit="contain"
              alt="airbnb_logo"
            />
          </div>
        </div>

        <div className="flex grow flex-row gap-3 items-center bg-white-900 rounded-full justify-between shadow-md border-2 h-10 py-5 px-2">
          <input
            className="mx-auto border-transparent outline-none"
            type="text"
            placeholder="Where to ? "
          ></input>

          <AiOutlineSearch
            color="white"
            className="bg-red-400 rounded-full cursor-pointer h-8 w-8 p-2 text-white "
          />
        </div>

        <div className="flex flex-row justify-end gap-3 items-center h-8">
          <div className="rounded-full bg-white px-2 hover:bg-slate-50 hover:shadow-sm transition-all">
            Become a Host
          </div>
          <TbWorld className="h-6 w-6" />

          <div className="gap-2 flex flex-row border-1 shadow-md rounded-full p-3">
            <GiHamburgerMenu />
            <FaUserCircle />
          </div>

          {/* {!loading &&
          (user ? (
            <>
              <Link href="/profile">
              <a>Client-rendered profile</a>
              </Link>
              
              <Link href="/advanced/ssr-profile">
              <a>Server rendered profile (advanced)</a>
              </Link>
              
              <a href="/api/logout">Logout</a>
              </>
              ) : (
                <div>
                <a href="/api/login">Login</a>
                </div>
              ))} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
