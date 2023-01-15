import React from "react";
import "../app/globals.css";
import { FcOk } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";

const FoodCard = (props) => {
  const { image, title, calories } = props;
  return (
    <div className="food-card m-4">
      <a
        href="#"
        className="flex items-center bg-white border rounded-xl shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
        <img
          className="object-cover w-16 h-16 ml-4 content-start rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rounded-lg"
          src={image}
          alt={title}
        />
        <div className="justify-between p-4 leading-normal">
          <h5 className="mb-2 text-[1.3rem] font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
          <div className="flex items-center space-x-1">
            <img
              className="h-[1rem] w-[1rem]"
              src="https://cdn-icons-png.flaticon.com/512/6897/6897039.png"
              alt="calories"
            />
            <p className="text-gray-700 ">Calories: {calories}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FoodCard;
