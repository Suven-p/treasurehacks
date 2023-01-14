import React from "react";
import "../app/globals.css";
import Image from "next/image";

const TopWelcome = (props) => {
  const { name, image } = props;
  return (
    <div className="flex bg-white rounded-xl space-x-6">
      <div className="image w-12 rounded-xl">
        <img src={image} alt={name} className="rounded-xl" />
      </div>
      <div className="flex-col ">
        <div className="flex-col text-sm">Welcome 👋</div>
        <div className="name flex-col font-bold text-xl">{name}</div>
      </div>
    </div>
  );
};

export default TopWelcome;
