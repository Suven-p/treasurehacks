import { useState, useEffect } from "react";

function Stopwatch({ activity, updateTime, img_url }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
    updateTime(activity, time);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center font-bold p-14">
        <img src={img_url} alt={activity} width="100px" height="100px" />
        <br></br>
        {activity}
        <br></br>
        <p className="text-lg">Time: {time}</p>
        <br></br>
        <div className="flex justify-center">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg mr-7"
            onClick={handleStart}
            disabled={isRunning}
          >
            Start
          </button>
          <br></br>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
            onClick={handleStop}
            disabled={!isRunning}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
