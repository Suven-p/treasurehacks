import React, { useRef, useEffect } from "react";
import "../app/globals.css";
import { FcOk } from "react-icons/fc";

const SleepSlider = ({ minutes }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.width = minutes / 6 + "%";
  }, [ref, minutes]);

  return (
    <div className="">
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" ref={ref}></div>
      </div>
    </div>
  );
};

export default SleepSlider;
