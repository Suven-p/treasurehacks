import React from "react";
import "../app/globals.css";
import { FcOk } from "react-icons/fc";
import SleepSlider from "./sleepslider";

const SleepCard = (props) => {
  let { date, hours } = props;

  const formatted_date = new Date(date);
  const options = { month: "short", day: "numeric" };
  const month = formatted_date.toLocaleString("en-us", { month: "short" });
  const day = formatted_date.getDate();
  const year = formatted_date.getFullYear();
  const date_to_use = `${month} ${day}, ${year}`;
  console.log(date_to_use);

  return (
    <div className="flex justify-between">
      <div>{date_to_use}</div>
      <div className="w-[5rem]">
        <SleepSlider hours={hours} />
      </div>
      <div> {hours}</div>
    </div>
  );
};

export default SleepCard;
