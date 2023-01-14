import React from "react";
import "../app/globals.css";
import WeekCard from "./week_date";

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
      <div className="habit-tracker-date">{dateWithFullMonthName}</div>
      <WeekCard week="Mon" date="26" />
    </div>
  );
};

export default CalendarCard;
