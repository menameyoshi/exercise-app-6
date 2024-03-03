import React, { useState } from "react";

const RepetitionExercise = ({ exercise, setMenuScreen }) => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((count) => count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "6em" }}>{count}</p>
      <button style={{ fontSize: "2em" }} onClick={incrementCounter}>
        Increment
      </button>
      <button style={{ fontSize: "2em" }} onClick={resetCounter}>
        Reset
      </button>
      <br />
      <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>
        Return to Menu
      </button>
    </div>
  );
};

export default RepetitionExercise;
