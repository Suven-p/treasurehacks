import React, { useEffect } from "react";
import Image from "next/image";
import "../app/globals.css";
import { useState } from "react";
import Link from "next/link";
import Stopwatch from "../components/stopwatch";

export const exercise = () => {
  const [exerciseToDo, setExerciseToDo] = useState(false);
  const [isExercising, setIsExercising] = useState(false);

  const [todaysActivities, setTodaysActivities] = useState([
    {
      name: "Dumbbell",
      time: "1000",
    },
    {
      name: "Treadmill",
      time: "420",
    },
    {
      name: "Cycling",
      time: "764",
    },
  ]);

  const [userName, setUserName] = useState([
    {
      name: "prasaya",
    },
  ]);
  const addActivity = (activityName, time) => {
    setTodaysActivities((currentValue) => {
      return [...currentValue, { name: activityName, time: time }];
    });
    setIsExercising(false);
    setExerciseToDo("");
  };
  const isOpen = true;

  const exercises = [
    ["Dumbell", "https://avatars.githubusercontent.com/u/98652711?v=4"],
    ["Treadmill", "https://avatars.githubusercontent.com/u/98652711?v=4"],
    ["Handgrip", "https://avatars.githubusercontent.com/u/98652711?v=4"],
    ["Cycling", "https://avatars.githubusercontent.com/u/98652711?v=4"],
    ["Push-ups", "https://avatars.githubusercontent.com/u/98652711?v=4"],
  ];

  if (isExercising) {
    return <Stopwatch activity={exerciseToDo} updateTime={addActivity} />;
  }
  return (
    <div className="p-7">
      <div className="justify-between flex mb-1.5">
        <div>
          <button
            className="bg-transparent flex outline-transparent transition-all"
            type="button"
          >
            <Image
              alt="Hero"
              src="https://avatars.githubusercontent.com/u/98652711?v=4"
              width={50}
              height={50}
            />
          </button>
          <h1>Hello Prasaya</h1>
        </div>
        <div
          className={
            isOpen
              ? "block"
              : "hidden" +
                "absolute  right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg"
          }
        >
          <Link href="#">
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
              Settings
            </p>
          </Link>
          <Link href="/login">
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
              Logout
            </p>
          </Link>
        </div>
      </div>

      <div className="wd-full flex">
        <button
          onClick={() => {
            setIsExercising(true);
            setExerciseToDo("");
          }}
        >
          {/* <div>
            Refresh your body
            <h3> Ready to start exercise</h3>
            <Image alt="Play Logo" src="" width={50} height={10} />
          </div>
          <div>
            <Image alt="Exercising Image" src="" width={60} height={10} />
          </div> */}
        </button>
      </div>

      <h1 className="text-left my-7">Your exercise Menu</h1>
      <div className="flex overflow-x-auto w-full">
        {exercises.map(([exerciseName, image], index) => {
          const clickHandler = () => {
            setIsExercising(true);
            setExerciseToDo(exerciseName);
          };
          return (
            <button
              onClick={clickHandler}
              className="shadow-3xl w-[200px] flex flex-col justify-center items-center grow-0 shrink-0"
              key={index}
            >
              <Image alt={exerciseName} src={image} width={100} height={100} />
              <h2 className="text-center my-4">{exerciseName} </h2>
            </button>
          );
        })}
      </div>

      <h1 className="text-left font-bold">Your activities to-day</h1>
      <div>
        {todaysActivities.map(({ name, time }) => {
          return (
            <p>
              {name} {time}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default exercise;
