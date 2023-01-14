import React from "react";
import "../app/globals.css";
import HabitCard from "../components/habit_card.jsx";
import TopWelcome from "../components/top_welcome.jsx";
import CalendarCard from "../components/calendar.jsx";
import CircularSlider from "@fseehawer/react-circular-slider";

const HabitTracker = () => {
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
      isCompleted: true,
    },
  ]);
  const [totalComplete, setTotalComplete] = React.useState(2);
  const [totalWork, setTotalWork] = React.useState(3);
  return (
    <div className="habit-tracker m-5 mt-10">
      <TopWelcome name={userDetails.name} image={userDetails.image} />
      <br />
      <br />

      <CalendarCard />
      <br />

      <CircularSlider
        label="Task Complete"
        labelColor={totalComplete == totalWork ? "#00ff00" : "#ff6600"}
        direction={1}
        progressSize={10}
        knobPosition="top"
        valueFontSize="4rem"
        trackColor="#eeeeee"
        progressColorFrom="#ff6600"
        progressColorTo="#00ff00"
        knobColor="#ffffff"
      />
      <div className="habit-tracker-title font-bold">Habit Tracker</div>
      <div className="habit-tracker-cards">
        {habits.map((habit) => {
          return (
            <HabitCard
              image={habit.image}
              title={habit.title}
              isCompleted={habit.isCompleted}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HabitTracker;
