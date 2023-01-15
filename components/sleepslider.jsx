import React, { useRef, useEffect } from "react";
import "../app/globals.css";
import { FcOk } from "react-icons/fc";

const SleepSlider = ({ minutes }) => {
  const ref = useRef(null);
  const idealMinutes = 10 * 60; // 10 hours

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.width = Math.min(minutes / idealMinutes * 100, 100).toString() + "%";
  }, [ref, minutes]);

  return (
    <div className="grow">
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full bg-gradient-to-r" ref={ref}></div>
      </div>
    </div>
  );
};

export default SleepSlider;
