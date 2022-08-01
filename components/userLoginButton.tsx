import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const UserLoginButton = () => {
  const router = useRouter();
  return (
    <div
      className="gap-2 flex flex-row border-1 shadow-md rounded-full p-3 cursor-pointer hover:shadow-md"
      onClick={() => router.push("https://github.com/clonglam/airbnb-clone")}
    >
      <GiHamburgerMenu />
      <FaUserCircle />
    </div>
  );
};

export default UserLoginButton;
