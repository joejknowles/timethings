import React, { useState, useEffect } from 'react';
import './App.css';

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

const App = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const step = boxBreathing[stepIndex];

  useEffect(() => {
    setInterval(() => {
      setStepIndex(prev => incrementTo(prev, 3));
    }, 4000)
  }, [])
  return (
    <div>
      { step.name }
    </div>
  );
}

export { App };
