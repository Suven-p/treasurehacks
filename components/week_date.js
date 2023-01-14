import React from "react";
import "../app/globals.css";

const SingleCard = (props) => {
  const { week, date } = props;
  return (
    <div className="week-card flex flex-col items-center bg-white border rounded-xl shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-10">
      <div className="week">{week}</div>
      <div className="date">{date}</div>
    </div>
  );
};

const WeekCard = (props) => {
  const { week, date } = props;
  return (
    // <div className="week-card rounded-lg border-2 border-gray-500 w-10">
    <div className="week-card ">
      <SingleCard week="Sun" date="15" />
      <SingleCard week="Mon" date="16" />
      <SingleCard week="Tue" date="17" />
      <SingleCard week="Wed" date="18" />
    </div>
  );
};

export default WeekCard;
