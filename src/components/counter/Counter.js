import React, { useState, useEffect } from "react";
// import "./Counter.css";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledCounter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  font-size: 3rem;
  font-weight: bolder;
`;

const LeftPannel = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightPannel = styled(LeftPannel)``;
const CentralPannel = styled.div`
  width: 40%;
`;

const Span = styled.span`
  font-size: 4rem;
  color: red;
`;

const CounterButton = styled(Button)`
  && {
    margin: 2rem;
    color: white;
    font-size: 3rem;
  }
`;

function Counter() {
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [isleft, setIsleft] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  function CountChange() {
    if (isleft) {
      setLeftCount(rightCount + 1);
    } else {
      setRightCount(leftCount + 1);
    }
    setIsleft((isleft) => !isleft);
  }

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(CountChange, 2000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, isleft]);

  return (
    <StyledCounter>
      <LeftPannel>
        Counter: <Span>{leftCount}</Span>
      </LeftPannel>
      <CentralPannel>
        {!isRunning ? (
          <CounterButton
            variant="contained"
            color="primary"
            onClick={() => setIsRunning(true)}
          >
            Start
          </CounterButton>
        ) : (
          <CounterButton
            variant="contained"
            color="secondary"
            onClick={() => setIsRunning(false)}
          >
            Stop
          </CounterButton>
        )}
      </CentralPannel>
      <RightPannel>
        Counter: <Span>{rightCount}</Span>
      </RightPannel>
    </StyledCounter>
  );
}

export default Counter;
