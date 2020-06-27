import { incrementTo } from "../utils";

export const startTimer = (setIndex, startIndex, steps) => {
  const nextStep = (index) => {
    const step = steps[index];
    setTimeout(() => {
      const nextIndex = incrementTo(index, 3);
      setIndex(nextIndex);
      nextStep(nextIndex);
    }, step.duration);
  };
  nextStep(startIndex);
};
