import { useCallback, useEffect, useState } from "react";

const useCountdown = (initialCount: number) => {
  const [countdown, setCountdown] = useState(initialCount);
  const [isActive, setIsActive] = useState(false);

  const startCountdown = useCallback(() => {
    setCountdown(initialCount);
    setIsActive(true);
  }, [initialCount]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          setIsActive(false);
          return initialCount;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, initialCount]);

  return {
    countdown,
    isActive,
    startCountdown,
  };
};

export default useCountdown;
