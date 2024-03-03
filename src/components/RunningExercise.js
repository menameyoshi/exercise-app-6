import React, { useState, useEffect } from 'react';

const RunningExercise = ({ setMenuScreen }) => {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTimer((prev) => prev + 10), 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStartStop = () => setRunning(!running);
  const handleReset = () => {
    setRunning(false);
    setTimer(0);
    setLaps([]);
  };
  const handleLap = () => setLaps((prevLaps) => [...prevLaps, timer]);

  return (
    <div>
      <p>{(timer / 1000).toFixed(2)}s</p>
      <button onClick={handleStartStop}>{running ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLap}>Lap</button>
      <div>
        <h2>Laps:</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>{(lap / 1000).toFixed(2)}s</li>
          ))}
        </ul>
      </div>
      <button onClick={setMenuScreen}>Return to Menu</button>
    </div>
  );
};

export default RunningExercise;
