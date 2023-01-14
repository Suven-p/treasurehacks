import React from "react";
import "../app/globals.css";
import WeekCard from "./week_date";
import Image from "next/image";

const CalendarCard = (props) => {
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dateWithFullMonthName = date + " " + monthNames[month] + ", " + year;

  return (
    <div className="calendar">
      <div className="flex justify-between habit-tracker-date mb-4 text-sm font-semibold">
        <div className="">{dateWithFullMonthName}</div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2278/2278049.png"
          className="h-[1rem] w-[1rem]"
        />
      </div>
      <WeekCard week="Mon" date="26" />
    </div>
  );
};

export default CalendarCard;
