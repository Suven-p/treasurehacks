import React from "react";
import "../app/globals.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ExerciseCard = (props) => {
  const { image, name, time } = props;
  return (
    <div className="flex w-100 h-24">
      <div className="grow flex items-center bg-white border rounded-xl shadow-md ">
        <img
          className="w-[3rem] object-cover ml-4 content-start rounded-t-lg md:rounded-none md:rounded-l-lg rounded-lg"
          src={image}
          alt={name}
        />
        <div className="p-4 leading-normal ml-auto">
          <h5 className="text-left font-normal flex justify-between mb-2 text-2xl tracking-tight text-gray-900 items-center">
            {name}
            <div className="p-7 font-extralight">
              {Math.floor(time / 60) < 10
                ? "0" + Math.floor(time / 60)
                : Math.floor(time / 60)}
              :{time % 60 < 10 ? "0" + (time % 60) : time % 60}
            </div>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
