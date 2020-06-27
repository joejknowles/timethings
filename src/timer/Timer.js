import React, { useState, useEffect } from "react";
import { boxBreathing } from "./presetTimers";
import { incrementTo } from "../utils";
import { Step } from "./Step";
import { startTimer } from "./startTimer";

export const Timer = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const step = boxBreathing[stepIndex];
  useEffect(() => {
    startTimer(setStepIndex, 0, boxBreathing);
  }, []);
  return <Step { ...step } />;
};
