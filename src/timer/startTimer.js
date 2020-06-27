import { incrementTo } from "../utils";

export const startTimer = (setIndex, startIndex, steps) => {
  startHashTimer();
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

const startHashTimer = () => {
  const nextSecond = (seconds) => {
    window.history.pushState(null, null, `#${seconds}`);
    document.title = "breath " + seconds;
    setTimeout(() => {
      nextSecond(seconds + 1);
    }, 1000);
  };
  nextSecond(0);
};
