// Timer.js

import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimerExpired }) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      onTimerExpired();
    }
  }, [seconds, onTimerExpired]);

  return <div>{seconds} seconds</div>;
};

export default Timer;
