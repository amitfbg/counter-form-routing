import React, { useState, useEffect } from "react";
import "./Counter.css";
import { Button } from "@material-ui/core";

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isleft, setIsleft] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        if (isleft) {
          setCount1(count2 + 1);
          setIsleft((isleft) => !isleft);
        } else {
          setCount2(count1 + 1);
          setIsleft((isleft) => !isleft);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isleft, isRunning]);

  return (
    <div className="counter">
      <div className="left-pannel">
        Counter: <span>{count1}</span>
      </div>
      <div className="centre-pannel">
        {!isRunning ? (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              setIsRunning(true);
            }}
          >
            Start
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => {
              setIsRunning(false);
            }}
          >
            Stop
          </Button>
        )}
      </div>
      <div className="right-pannel">
        Counter: <span>{count2}</span>
      </div>
    </div>
  );
}

export default Counter;
