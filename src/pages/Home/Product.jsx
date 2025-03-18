import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { MdBrightnessAuto } from "react-icons/md";
const Product = () => {
  const data = [
    {
      logo: <GiTrophyCup />,
      text: "5,000+ Placements",
      bg: "rgb(255,247,224)",
      colors: "rgb(247,194,47)",
    },
    {
      logo: <PiStudentBold />,
      text: "10,000+ Successful Students",
      bg: "rgb(232,235,237)",
      colors: "rgb(29,60,84)",
    },
    {
      logo: <MdManageAccounts />,
      text: "100+ Expert Trainers",
      bg: "rgb(241,237,250)",
      colors: "rgb(111,66,194)",
    },
    {
      logo: <MdBrightnessAuto />,
      text: "Global Recognized Certificates",
      bg: "rgb(230,245,247)",
      colors: "rgb(22,162,184)",
    },
  ];

  return (
    <section className="h-[23vh] grid grid-cols-4 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 p-4 border-none pt-8"
          style={{ backgroundColor: item.bg, color: item.colors }}
        >
          <h1 className="text-[70px] font-bold">{item.logo}</h1>
          <p className="font-[400] text-[20px] leading-[28px]">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Product;
