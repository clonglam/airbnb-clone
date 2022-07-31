import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";

const UserLoginButton = () => {
  return (
    <div className="gap-2 flex flex-row border-1 shadow-md rounded-full p-3">
      <GiHamburgerMenu />
      <FaUserCircle />
    </div>
  );
};

export default UserLoginButton;
