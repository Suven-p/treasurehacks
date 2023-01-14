import React from "react";
import "../app/globals.css";
import HabitCard from "../components/habit_card.js";
import TopWelcome from "../components/top_welcome.js";
import CalendarCard from "../components/calendar.js";

const HabitTracker = () => {
  const [userDetails, setUserDetails] = React.useState({
    name: "Prasaya",
    image: "https://avatars.githubusercontent.com/u/47562404?v=4",
  });
  const [habits, setHabits] = React.useState([
    {
      image: "https://i.imgur.com/8QZQ2tj.png",
      title: "Drink Water",
      category: "Health",
      isCompleted: false,
    },
    {
      image: "https://i.imgur.com/8QZQ2tj.png",
      title: "Drink Water",
      category: "Health",
      isCompleted: false,
    },
  ]);

  return (
    <div className="habit-tracker">
      <TopWelcome name={userDetails.name} image={userDetails.image} />
      <br />
      <br />
      <CalendarCard />

      <br />
      <div className="habit-tracker-title">Habit Tracker</div>
      <div className="habit-tracker-cards">
        <HabitCard
          image="https://media.istockphoto.com/vectors/woman-drinking-water-bottle-vector-illustration-healthy-lifestyle-vector-id1352408995?b=1&k=20&m=1352408995&s=170667a&w=0&h=oOSxrfggB1OF16k-ij_15UJJwxtA-rNH7v1H_PMWZlI="
          title="Drink Water"
          isCompleted={true}
        />
        {/* <HabitCard
          image="https://i.imgur.com/8QZQ2tj.png"
          title="Drink Water"
          category="Health"
        />
        <HabitCard
          image="https://i.imgur.com/8QZQ2tj.png"
          title="Drink Water"
          category="Health"
        /> */}
      </div>
    </div>
  );
};

export default HabitTracker;
