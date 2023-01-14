import React from "react";
import "../app/globals.css";
import HabitCard from "../components/habit_card.js";

const HabitTracker = () => {
  return (
    <div className="habit-tracker">
      <div className="habit-tracker-title">Habit Tracker</div>
      <div className="habit-tracker-cards">
        <HabitCard
          image="https://media.istockphoto.com/vectors/woman-drinking-water-bottle-vector-illustration-healthy-lifestyle-vector-id1352408995?b=1&k=20&m=1352408995&s=170667a&w=0&h=oOSxrfggB1OF16k-ij_15UJJwxtA-rNH7v1H_PMWZlI="
          title="Drink Water"
          category="Health"
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
