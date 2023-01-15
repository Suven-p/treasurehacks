import React from "react";
import "../app/globals.css";
import { FcOk } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

const HabitCard = (props) => {
  const { image, title, isCompleted, markAsCompleted } = props;
  return (
    <div className="habit-card m-4">
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
          <h5 className="mb-2 text-[1.2rem] font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
          {isCompleted ? (
            <div className="completed flex items-center space-x-1">
              <FcOk className="text-[1.1rem]" />
              <p className="text-gray-700 ">Completed</p>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <img
                className="h-[1rem] w-[1rem]"
                src="https://cdn-icons-png.flaticon.com/512/6897/6897039.png"
                alt="remaining"
              />
              <p className="text-gray-700 ">Remaining</p>
            </div>
          )}
        </div>
        {!isCompleted && (
          <button
            className="ml-auto w-8 mr-5"
            onClick={(e) => {
              e.preventDefault();
              markAsCompleted(title);
            }}
          >
            <FcCheckmark className="w-full text-[8rem]" />
          </button>
        )}
      </a>
    </div>
  );
};

export default HabitCard;
