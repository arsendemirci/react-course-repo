import { useState, useEffect } from "react";

const useCounter = (direction) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        direction === "forward"
          ? prevCounter + 1
          : direction === "backward"
          ? prevCounter - 1
          : prevCounter
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return [counter];
};

export default useCounter;
