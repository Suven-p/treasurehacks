import React from "react";
import "../app/globals.css";

const SingleCard = (props) => {
  const { week, date } = props;
  return (
    <div className="flex flex-col justify-center  text-center bg-white border rounded-lg shadow-md w-20 h-16">
      <div className="week">{week}</div>
      <div className="date">{date}</div>
    </div>
  );
};

const WeekCard = (props) => {
  const { week, date } = props;
  return (
    // <div className="week-card rounded-lg border-2 border-gray-500 w-10">
    <div className="week-card flex justify-around space-x-3">
      <SingleCard week="Su" date="15" />
      <SingleCard week="Mo" date="16" />
      <SingleCard week="Tu" date="17" />
      <SingleCard week="We" date="18" />
      <SingleCard week="Th" date="19" />
      <SingleCard week="Fr" date="20" />
    </div>
  );
};

export default WeekCard;
