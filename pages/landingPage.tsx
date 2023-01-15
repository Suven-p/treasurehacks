import React from "react";
import Link from "next/link";
import "../app/globals.css";
import ProtectedRoute from "@/components/protectedRoute";
import useUserData from "@/utils/useUserData";
import { Manrope } from "@next/font/google";

const sofia = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

const NavLink = ({
  image,
  text,
  href,
  className,
}: {
  image: string;
  text: string;
  href: string;
  className: string;
}) => {
  return (
    <Link
      className={`p-3 w-[90%] h-[10vh] my-2 rounded-3xl flex justify-center space-x-5 items-center ${className}`}
      href={href}
    >
      <img alt={`Link to ${text}`} src={image} className="w-auto h-[70%]" />
      <div className="text-2xl mt-4">{text}</div>
    </Link>
  );
};
const landingPage = () => {
  const { userData } = useUserData();
  return (
    <ProtectedRoute>
      <div className="shadow-xl p-12 bg-white h-[100vh]">
        <div className="flex justify-between items-center">
          <div className="image w-[10vh] rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/47562404?v=4"
              alt={`Profile picture`}
              className="rounded-2xl"
            />
          </div>
          <div className="image w-[5vh] rounded-xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8867/8867520.png"
              alt="nav"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex-col mt-5 ">
          <div className="text-3xl">
            Hello,&nbsp;
            <br />
            <span className="name font-normal">{userData.firstName} 👋</span>
          </div>
        </div>
        <div className="flex justify-around my-10">
          <div className=" bg-[rgba(150,150,150,.5)] h-[10vh] w-[32.5vw] rounded-2xl flex flex-col justify-around items-center">
            <div className="flex justify-around items-center h-50">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2429/2429818.png"
                alt="rular"
                width={30}
              ></img>
              <span className="text-xl font-bold">Height</span>
            </div>
            <div className="text-xl font-bold ">155 cm</div>
          </div>
          <div className="bg-[rgba(150,150,150,.5)] h-[10vh] w-[32.5vw] rounded-2xl flex flex-col justify-around items-center">
            <div className="flex justify-around items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3213/3213786.png"
                alt="rular"
                width={30}
              ></img>
              <span className="text-xl font-bold">Scale</span>
            </div>
            <div className="text-xl font-bold">85 Kg</div>
          </div>
        </div>
        <div className={`font-normal text-4xl  text-center ${sofia.className}`}>
          My Health
        </div>
        <div className="text-black font-medium flex flex-col justify-between items-center ">
          <NavLink
            image="https://cdn-icons-png.flaticon.com/512/2382/2382679.png"
            text="Exercise"
            href="/exercise"
            className="bg-[rgba(247,228,182,0.5)] "
          />
          <NavLink
            image="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
            text="Nutrition"
            href="/nutrition"
            className="bg-[rgba(247,228,182,0.5)] "
          />
          <NavLink
            image="https://cdn-icons-png.flaticon.com/512/3588/3588658.png"
            text="Habits"
            href="/habitTracker"
            className="bg-[rgba(247,228,182,0.5)] "
          />
          <NavLink
            image="https://cdn-icons-png.flaticon.com/512/3094/3094845.png"
            text="Sleep"
            href="/sleepTracker"
            className="bg-[rgba(247,228,182,0.5)] "
          />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default landingPage;
