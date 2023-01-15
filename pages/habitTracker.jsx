import React, { useEffect } from "react";
import "../app/globals.css";
import HabitCard from "../components/habit_card.jsx";
import TopWelcome from "../components/top_welcome.jsx";
import CalendarCard from "../components/calendar.jsx";
import CircularSlider from "@fseehawer/react-circular-slider";
import internal from "stream";
import { FcPlus } from "react-icons/fc";
import useUserData from "@/utils/useUserData";

const HabitTracker = () => {
  const [showAddPrompt, setShowPrompt] = React.useState(false);

  const { userData } = useUserData();
  const [userDetails, setUserDetails] = React.useState({
    name: "Prasaya",
    image: "https://avatars.githubusercontent.com/u/47562404?v=4",
  });
  const [habits, setHabits] = React.useState([
    {
      image:
        "https://media.istockphoto.com/vectors/woman-drinking-water-bottle-vector-illustration-healthy-lifestyle-vector-id1352408995?b=1&k=20&m=1352408995&s=170667a&w=0&h=oOSxrfggB1OF16k-ij_15UJJwxtA-rNH7v1H_PMWZlI=",
      title: "Drink Water",
      isCompleted: true,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2983/2983413.png",
      title: "Exercise",
      isCompleted: false,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3475/3475650.png",
      title: "Meditate",
      isCompleted: false,
    },
  ]);
  const [totalComplete, setTotalComplete] = React.useState(2);
  const [totalWork, setTotalWork] = React.useState(3);

  const markAsCompleted = (completedHabit) => {
    setHabits((prevValue) => {
      return prevValue.map((habit) => {
        if (habit.title === completedHabit) {
          habit.isCompleted = true;
        }
        return habit;
      });
    });
  };

  useEffect(() => {
    setTotalComplete(habits.filter((habit) => habit.isCompleted).length);
  }, [habits]);

  useEffect(() => {
    setTotalWork(habits.length);
  }, [habits]);

  return (
    <div className="habit-tracker m-5 mt-10">
      <TopWelcome name={userDetails.name} image={userDetails.image} />
      <br />
      <br />

      <CalendarCard />
      <br />
      <div className="flex justify-center items-center space-x-10">
        <div>
          <CircularSlider
            width={125}
            label=" "
            labelBottom={true}
            labelColor={totalComplete == totalWork ? "#00ff00" : "#6D6DC1"}
            direction={1}
            progressSize={10}
            max={100}
            trackSize={10}
            knobDraggable={false}
            dataIndex={(totalComplete / totalWork) * 100}
            knobPosition="top"
            labelFontSize="0rem"
            valueFontSize="2rem"
            trackColor="#bbbbbb"
            progressColorFrom="#6D6DC1"
            progressColorTo="#6D6DC1"
            hideKnob={true}
            data={Array.from({ length: 101 }, (v, k) => k + "%")}
          />
        </div>
        <div className="flex-wrap text-center">
          {totalComplete} of {totalWork} completed
          <div className="font-bold text-xl">My Activities</div>
        </div>
      </div>

      <br />
      <div className="habit-tracker-title font-bold flex justify-between mr-6">
        <p>Habit Tracker</p>
        <button
          onClick={() => {
            setShowPrompt(true);
            window.scrollTo({ top: document.body.scrollHeight });
          }}
        >
          <FcPlus className="text-2xl mr-4" />
        </button>
      </div>
      <div className="habit-tracker-cards">
        {habits.map((habit, index) => {
          return (
            <HabitCard
              key={index}
              image={habit.image}
              title={habit.title}
              isCompleted={habit.isCompleted}
              markAsCompleted={markAsCompleted}
            />
          );
        })}
      </div>

      {showAddPrompt && (
        <div className="add-bar rounded-lg shadow-lg h-52 mb-4 w-100 p-4">
          <div className="p-4 flex flex-col gap-4 h-8">
            <input
              placeholder="Enter habit"
              className="h-8 p-4 border border-slate-600 rounded-lg"
            />
            <input
              placeholder="Enter custom image"
              className="h-8 p-4 border border-slate-600 rounded-lg"
            />
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full mb-4"
              onClick={(e) => {
                e.preventDefault();
                setShowPrompt(false);
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitTracker;
