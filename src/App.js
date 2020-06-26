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

const boxBreathing = [
  { name: "Breathe in" },
  { name: "Hold" },
  { name: "Breathe out" },
  { name: "Hold" },
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

const App = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const step = boxBreathing[stepIndex];

  useEffect(() => {
    setInterval(() => {
      setStepIndex(prev => incrementTo(prev, 3));
    }, 4000)
  }, [])
  return (
    <Step>
      <StyleBody/>
      { step.name }
    </Step>
  );
}

export { App };
