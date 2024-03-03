import { useCallback, useEffect, useState } from "react";

export default function StopWatch() {
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);

  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    let currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [updateTimer]);

  let reset = useCallback(() => {
    setTimer(0);
  }, []);

  let mins = (Math.floor(timer / (1000 * 60)) % 60).toString().padStart(2, "0");
  let secs = (Math.floor(timer / 1000) % 60).toString().padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(3, "0");

  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      <p style={{ fontSize: "7em", margin: "auto", fontFamily: "monospace" }}>
        {mins}:{secs}.{mills}
      </p>
      <button style={{ fontSize: "4em" }} onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button style={{ fontSize: "4em" }} onClick={reset}>
        Reset
      </button>
    </div>
  );
}
