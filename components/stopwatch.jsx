import { useState, useEffect } from "react";

function Stopwatch({ activity, updateTime }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  console.log("uero", activity);

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
    console.log("9erywe");
    setIsRunning(false);
    updateTime(activity, time);
  }

  return (
    <div>
      {activity}
      <p>Time: {time}</p>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}

export default Stopwatch;
