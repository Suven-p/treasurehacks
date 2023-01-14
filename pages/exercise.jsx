import React, { useEffect } from "react";
import Image from "next/image";
import "../app/globals.css";
import { useState } from "react";
import Link from "next/link";
import Stopwatch from "../components/stopwatch";
import ExerciseCard from "../components/exercise_card";
import TopWelcome from "../components/top_welcome.jsx";

export const exercise = () => {
  const [exerciseToDo, setExerciseToDo] = useState(0);
  const [isExercising, setIsExercising] = useState(false);
  const [userDetails, setUserDetails] = React.useState({
    name: "Prasaya",
    image: "https://avatars.githubusercontent.com/u/47562404?v=4",
  });

  const [todaysActivities, setTodaysActivities] = useState([
    {
      image: "https://cdn-icons-png.flaticon.com/512/563/563777.png",
      name: "Dumbell",
      time: 1000,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2382/2382679.png",
      name: "Treadmill",
      time: 420,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3600/3600996.png",
      name: "Cycling",
      time: 764,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/7430/7430235.png",
      name: "Handgrip",
      time: 764,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5147/5147050.png",
      name: "Push-ups",
      time: 764,
    },
  ]);

  const [userName, setUserName] = useState([
    {
      name: "prasaya",
    },
  ]);
  const addActivity = (activityName, time) => {
    setTodaysActivities((currentValue) => {
      const index = currentValue.findIndex((val) => val.name === activityName);
      currentValue[index].time += time;
      return currentValue;
    });
    setIsExercising(false);
    setExerciseToDo(0);
  };
  const isOpen = true;

  const exercises = [
    ["Dumbell", "https://cdn-icons-png.flaticon.com/512/563/563777.png"],
    ["Treadmill", "https://cdn-icons-png.flaticon.com/512/2382/2382679.png"],
    ["Handgrip", "https://cdn-icons-png.flaticon.com/512/7430/7430235.png"],
    ["Cycling", "https://cdn-icons-png.flaticon.com/512/3600/3600996.png"],
    ["Push-ups", "https://cdn-icons-png.flaticon.com/512/5147/5147050.png"],
  ];

  if (isExercising) {
    return (
      <Stopwatch
        activity={exercises[exerciseToDo][0]}
        updateTime={addActivity}
        img_url={exercises[exerciseToDo][1]}
      />
    );
  }
  return (
    <div className="p-7">
      <div className="justify-between flex mb-1.5">
        <TopWelcome name={userDetails.name} image={userDetails.image} />
        <br />
        <br />
      </div>

      <div className="wd-full flex">
        <button
          onClick={() => {
            setIsExercising(true);
            setExerciseToDo(0);
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

      <h1 className="text-left my-7 font-bold">Your exercise Menu</h1>
      <div>
        <div className="m-7 flex overflow-x-auto overflow-y-auto w-3/4 justify-left">
          {exercises.map(([exerciseName, image], index) => {
            const clickHandler = () => {
              setIsExercising(true);
              setExerciseToDo(index);
            };
            return (
              <button
                onClick={clickHandler}
                className="shadow-3xl w-[150px] flex flex-col justify-center items-center grow-0 shrink-0"
                key={index}
              >
                <img alt={exerciseName} src={image} className="w-[5rem]" />
                <h2 className="font-bold text-center my-4">{exerciseName} </h2>
              </button>
            );
          })}
        </div>
      </div>

      <h1 className="text-left font-bold py-7">Your activities to-day</h1>
      {/* <div>
        {todaysActivities.map(({ image, name, time }) => {
          <ExerciseCard image={image} name={name} time={time} />;
          return (
            <p>
              {name} {time}
            </p>
          );
        })}
      </div> */}

      <div className="exercise-cards mb-4 space-y-4">
        {todaysActivities.map((todayActivity, index) => {
          return (
            <ExerciseCard
              key={index}
              image={todayActivity.image}
              name={todayActivity.name}
              time={todayActivity.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default exercise;
