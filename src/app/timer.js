import { useState, useEffect } from 'react';

const TimeElapsed = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const start = new Date(); // Record the start time when the component mounts
    setStartTime(start);

    // Clean-up function to calculate elapsed time when the component unmounts
    return () => {
      const end = new Date();
      const elapsed = end - start; // Calculate the elapsed time
      setElapsedTime(elapsed);
    };
  }, []); // Empty dependency array means this effect runs only once (on mount)

  return (
    <div>
      <p>Start Time: {startTime && startTime.toLocaleTimeString()}</p>
      <p>Elapsed Time: {elapsedTime} milliseconds</p>
    </div>
  );
};

export default TimeElapsed;
