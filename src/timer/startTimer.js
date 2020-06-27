import { incrementTo } from "../utils";

export const startTimer = (setIndex, index, steps) => {
  const step = steps[index];
  setTimeout(() => {
    const nextIndex = incrementTo(index, 3);
    setIndex(nextIndex);
    startTimer(setIndex, nextIndex, steps);
  }, step.duration);
};
