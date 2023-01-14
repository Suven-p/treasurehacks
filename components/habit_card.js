import React from "react";
import "../app/globals.css";

const HabitCard = (props) => {
  const { image, title, category } = props;
  return (
    <div className="habit-card">
      <div className="habit-card-title">{title}</div>
      <div className="habit-card-category">{category}</div>

      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-lg" src={image} alt={title} />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">
              {title}
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
