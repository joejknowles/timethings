import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { boxBreathing } from "./presetTimers";
import { incrementTo } from "../utils";

const Step = styled.div`
  font-size: 4rem;
  text-align: center;
  padding-top: 10vh;
  height: 90vh;
  background-color: hsl(240, 10%, 90%);
`;

const startTimer = (setIndex, index) => {
  const step = boxBreathing[index];
  setTimeout(() => {
    const nextIndex = incrementTo(index, 3);
    setIndex(nextIndex);
    startTimer(setIndex, nextIndex);
  }, step.duration);
};

export const Timer = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const step = boxBreathing[stepIndex];
  useEffect(() => {
    startTimer(setStepIndex, 0);
  }, []);
  return <Step>{step.name}</Step>;
};
