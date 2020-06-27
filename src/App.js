import React, { useState, useEffect } from 'react';
import './App.css';
import styled, { createGlobalStyle } from "styled-components";

const StyleBody = createGlobalStyle`
  body, #root, html {
    height: 100%;
    margin: 0;
    font-family: work sans;
    font-size: 16px;
  }
`;

let boxBreathing = [
  { name: "Breathe in", duration: 4000 },
  { name: "Hold", duration: 4000 },
  { name: "Breathe out", duration: 4000 },
  { name: "Hold", duration: 4000 },
];

const incrementTo = (value, max) => {
  if (value === max) {
    return 0;
  }
  return value + 1;
};

const Step = styled.div`
  font-size: 4rem;
  text-align: center;
  padding-top: 10vh;
  height: 90vh;
  background-color: hsl(240, 10%, 90%);
`;

const startStep = (setIndex, index) => {
  const step = boxBreathing[index];
  setTimeout(() => {
    const nextIndex = incrementTo(index, 3)
    setIndex(nextIndex);
    startStep(setIndex, nextIndex)
  }, step.duration);
}

const App = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const step = boxBreathing[stepIndex];
  useEffect(() => {
    startStep(setStepIndex, 0);
  }, [])
  return (
    <Step>
      <StyleBody/>
      { step.name }
    </Step>
  );
}

export { App };
