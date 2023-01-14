import React from "react";
import "../app/globals.css";
import FoodCard from "../components/nutrition_card.jsx";
import TopWelcome from "../components/top_welcome.jsx";
import CalendarCard from "../components/calendar.jsx";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useEffect, useState } from "react";

const NutritionTracker = () => {
  const [userDetails, setUserDetails] = React.useState({
    name: "Prasaya",
    image: "https://avatars.githubusercontent.com/u/47562404?v=4",
  });
  const [foods, setFoods] = React.useState([
    {
      image: "https://cdn-icons-png.flaticon.com/512/7297/7297294.png",
      title: "Pizza",
      calories: 300,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/7649/7649300.png",
      title: "Salad",
      calories: 150,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/7602/7602852.png",
      title: "Steak",
      calories: 250,
    },
  ]);
  const [totalCalories, setTotalCalories] = React.useState(0);
  const [dailyCalories, setDailyCalories] = React.useState(2000);
  const [newFood, setNewFood] = useState("");
  const [calories, setCalories] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTotalCalories(
      foods.reduce((acc, food) => Number(acc) + Number(food.calories), 0)
    );
  }, [foods]);

  const addNewFood = () => {
    if (newFood.length > 0 && calories > 0) {
      setFoods([...foods, { title: newFood, calories: calories }]);
      setNewFood("");
      setCalories(0);
    } else {
      alert("Please enter valid food name and calories");
    }
  };

  return (
    <div className="nutrition-tracker m-5 mt-10">
      <TopWelcome name={userDetails.name} image={userDetails.image} />
      <br />
      <br />
      <div className="flex justify-center items-center space-x-10">
        <div>
          <CircularSlider
            width={125}
            label="‎"
            labelColor={totalCalories > dailyCalories ? "#ff6600" : "#6D6DC1"}
            direction={1}
            progressSize={10}
            max={100}
            trackSize={10}
            knobDraggable={false}
            dataIndex={(totalCalories / dailyCalories) * 100}
            knobPosition="top"
            labelFontSize=".75rem"
            valueFontSize="2rem"
            trackColor="#bbbbbb"
            progressColorFrom="#6D6DC1"
            progressColorTo="#6D6DC1"
            hideKnob={true}
            data={Array.from({ length: 101 }, (v, k) => k + "%")}
          />
        </div>
        <div className="flex-wrap text-center">
          <div className="text-[1.2rem]">Calories:</div>
          <div className="font-bold text-xl">
            {totalCalories}/{dailyCalories}
          </div>
        </div>
      </div>
      <div className="nutrition-tracker-title font-bold p-7">
        Nutrition Tracker
      </div>
      <div className="nutrition-tracker-cards">
        {foods.map((food, index) => {
          return (
            <FoodCard
              key={index}
              image={food.image}
              title={food.title}
              calories={food.calories}
            />
          );
        })}
      </div>
      <div>
        <br />
        <div className="flex justify-center">
          <button onClick={() => setIsVisible(!isVisible)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828819.png"
              alt="+"
              width="50"
              height="50"
            />
          </button>
        </div>
        {isVisible && (
          <div className="add-bar rounded-lg shadow-lg">
            <div className="p-4">
              <input
                placeholder="Enter food name"
                value={newFood}
                onChange={(e) => setNewFood(e.target.value)}
                className="border rounded-lg p-2 m-2"
              />
              <input
                placeholder="Enter calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="border rounded-lg p-2 m-2"
              />
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={addNewFood}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionTracker;
