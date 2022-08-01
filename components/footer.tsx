import React from "react";
import { useRouter } from "next/router";

interface Props {}

const Footer = (props: Props) => {
  const router = useRouter();

  const footerData = [
    {
      title: "About",
      items: [
        { name: "How Airbnb works", path: "" },
        { name: "News room", path: "" },
        { name: "Investors", path: "" },
        { name: "Airbnb Plus", path: "" },
        { name: "Airbnb Luxe", path: "" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "This is a mock website", path: "" },
        { name: "it only clone", path: "" },
        { name: "", path: "" },
      ],
    },
    {
      title: "Host",
      items: [
        { name: "Watch my github", path: "" },
        { name: "Check it out", path: "" },
        { name: "I did it many others", path: "" },
        { name: "React & next js project", path: "" },
        { name: "Watch my git hub", path: "" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "How Airbnb works", path: "" },
        { name: "News room", path: "" },
        { name: "Investors", path: "" },
        { name: "Airbnb Plus", path: "" },
        { name: "Airbnb Luxe", path: "" },
      ],
    },
  ];

  return (
    <div className="space-y-10 px-32  py-14 bg-gray-100 text-gray-600 w-full">
      <p> </p>
      <div className="text-xs text-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {footerData.map(({ title, items }) => (
          <div key={`footerColumn_${title}`}>
            <p className="font-bold text-md">{title}</p>
            {items.map((item) => (
              <div key={`footer_${title}_${item.name}`}>
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    router.push("https://github.com/clonglam/airbnb-clone")
                  }
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
