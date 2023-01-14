import React from "react";
import "../app/globals.css";

const SingleCard = (props) => {
  const { week, date, isToday } = props;
  console.log(isToday);
  return (
    <div className="flex flex-col justify-center  text-center bg-white border rounded-lg shadow-md w-20 h-16">
      {isToday ? (
        <div className="border border-green-600">
          <div className="week text-green-800 opacity-75 font-bold">{week}</div>
          <div className="date text-green-800 opacity-75  font-bold">
            {date}
          </div>
        </div>
      ) : (
        <>
          <div className="week">{week}</div>
          <div className="date">{date}</div>
        </>
      )}
    </div>
  );
};

const WeekCard = (props) => {
  const { week, date } = props;
  return (
    // <div className="week-card rounded-lg border-2 border-gray-500 w-10">
    <div className="week-card flex justify-around space-x-3">
      <SingleCard week="Su" date="15" isToday={true} />
      <SingleCard week="Mo" date="16" isToday={false} />
      <SingleCard week="Tu" date="17" isToday={false} />
      <SingleCard week="We" date="18" isToday={false} />
      <SingleCard week="Th" date="19" isToday={false} />
      <SingleCard week="Fr" date="20" isToday={false} />
    </div>
  );
};

export default WeekCard;
