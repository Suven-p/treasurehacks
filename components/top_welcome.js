import React from "react";
import "../app/globals.css";
import Image from "next/image";

const TopWelcome = (props) => {
  const { name, image } = props;
  return (
    <div className="flex flex-col bg-white border rounded-xl shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="image w-12 rounded-xl">
        <img src={image} alt={name} className="rounded-xl" />
      </div>
      Welcome 👋
      <br />
      <div className="name">{name}</div>
    </div>
  );
};

export default TopWelcome;
