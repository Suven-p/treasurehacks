import React, { useContext, useState } from "react";
import Link from "next/link";
import "../app/globals.css";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

function homepage() {
  const data = useContext(AuthContext);
  const router = useRouter();
  if (data.isLoading) return <div></div>;
  if (data.user) {
    router.replace("/landingPage");
  }
  const d = new Date();
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [month, setMonth] = useState(d.getMonth());
  const [date, setDate] = useState(d.getDate());
  const [time, setTime] = useState({ hour: d.getHours(), min: d.getMinutes() });
  return (
    <div className="flex flex-col bg-bgimg bg-cover bg-center h-[100vh] w-[100vw] items-center justify-around">
      <div className="space-x-[40vw] space-y-[30vh] ">
        <div className="bg-[#e6ddea] w-32 h-32 rounded-2xl text-3xl font-bold flex items-center justify-center flex-warp text-center justify-self-start ">
          {monthList[month]}
          <br />
          {date}
        </div>

        <div className="bg-[#f7e4b6] w-32 h-32 rounded-2xl text-3xl font-bold flex items-center justify-center flex-warp text-center">
          {time["hour"] % 12 < 10
            ? "0" + (time["hour"] % 12)
            : time["hour"] % 12}
          :{time["min"] < 10 ? "0" + time["min"] : time["min"]}
          <br />
          {time["hour"] > 11 ? "PM" : "AM"}
        </div>
      </div>
      <div className="flex flex-row items-center space-x-10 justify-center">
        <div className="text-[2rem] text-white flex-wrap  w-2/4 ">
          Flow into fitness with Fitness Flow
        </div>
        <Link className=" " href="/login">
          <div className="flex bg-white rounded-full w-[10vh] h-[10vh] items-center justify-center ">
            <p className="font-bold text-3xl ">&#187;</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default homepage;
