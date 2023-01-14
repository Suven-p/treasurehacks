import React from "react";
import Link from "next/link";
import "../app/globals.css";

const landingPage = () => {
  const [userDetails, setUserDetails] = React.useState({
    name: "Prasaya",
    image: "https://avatars.githubusercontent.com/u/47562404?v=4",
  });
  return (
    <div className="shadow-xl bg-white h-[100vh]">
      <div className=" ml-[10vw] w-[80vw]">
        <div className="flex justify-between items-center">
          <div className="image w-[10vh] rounded-full">
            <img
              src={userDetails["image"]}
              alt={userDetails["name"]}
              className="rounded-full mt-5"
            />
          </div>
          <div className="image w-[5vh] rounded-xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8867/8867520.png"
              alt="nav"
              className="rounded-full mt-5"
            />
          </div>
        </div>
      </div>
      <div className=" ml-[10vw] flex-col mt-5 ">
        <div className="text-3xl font-serif">Hello, </div>
        <div className="name font-semibold font-serif text-4xl">
          {userDetails["name"]} 👋
        </div>
      </div>

      <div className="text-black font-bold flex justify-center space-x-4 mt-5">
        <Link
          className="flex-col justify-center space-y-10 rounded-[10vw] h-[25vh] w-[40vw]  bg-[rgba(247,228,182,0.5)]  flex justify-center items-center"
          href="/exercise"
        >
          <div className="">
            <img
              alt="exercise"
              src="https://cdn-icons-png.flaticon.com/512/2382/2382679.png"
              className="w-[5rem]"
            />
          </div>
          <div className="text-2xl">Exercise</div>
        </Link>
        <Link
          className="flex-col justify-center space-y-10  rounded-[10vw] h-[25vh] w-[40vw] bg-[rgba(247,228,182,0.5)]  flex justify-center items-center"
          href="/nutrition"
        >
          <div className="">
            <img
              alt="Nutrition"
              src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
              className="w-[5rem]"
            />
          </div>

          <div className="text-2xl">Nutrition</div>
        </Link>
      </div>
      <div className=" ml-[10vw] mt-[10vw] mb-[5vw] font-semibold text-4xl">
        My Health
      </div>
      <div className="text-black font-bold flex justify-center space-x-4 mt-4">
        <Link
          className="flex-col justify-center space-y-10 rounded-[10vw] h-[25vh] w-[40vw] bg-[rgba(50,50,50,.25)]  flex justify-center items-center"
          href="/habitTracker"
        >
          <div className="">
            <img
              alt="exercise"
              src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png"
              className="w-[5rem]"
            />
          </div>
          <div className="text-2xl">Habits</div>
        </Link>
        <Link
          className="flex-col justify-center space-y-10 rounded-[10vw] h-[25vh] w-[40vw] bg-[rgba(50,50,50,.25)] flex justify-center items-center"
          href="/sleepTracker"
        >
          <div className="">
            <img
              alt="exercise"
              src="https://cdn-icons-png.flaticon.com/512/3094/3094845.png"
              className="w-[5rem]"
            />
          </div>
          <div className="text-2xl">Sleep</div>
        </Link>
      </div>
    </div>
  );
};

export default landingPage;
