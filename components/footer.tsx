import React from "react";

interface Props {}

const Footer = (props: Props) => {
  const footerData = [{}];

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 space-y-10 px-32 container 
    py-14 bg-gray-100 text-gray-600"
    >
      <div className=" space-y-4 text-xs text-gray-800">{}</div>
    </div>
  );
};

export default Footer;
