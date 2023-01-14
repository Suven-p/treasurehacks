import React from "react";
import "../app/globals.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const HabitCard = (props) => {
  const { image, title, isCompleted } = props;
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
          {isCompleted ? (
            <div className="completed flex items-center space-x-1">
              <img
                className="h-[1rem] w-[1rem]"
                src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png"
                alt="check"
              />
              <p className="text-gray-700 ">Completed</p>
              {/* <AiOutlineCheckCircle className="color-green-100" /> */}
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <img
                className="h-[1rem] w-[1rem]"
                src="https://cdn-icons-png.flaticon.com/512/463/463575.png"
                alt="remaining"
              />
              <p className="text-gray-700 ">Remaining</p>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default HabitCard;
