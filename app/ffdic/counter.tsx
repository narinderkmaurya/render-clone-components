"use client";

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // Increment the count when the component comes into view
  if (inView && count < 100000) {
    const increment = Math.ceil(100000 / 100); // Increment by 100 when in view
    setCount((prevCount) => Math.min(prevCount + increment, 100000));
  }

  return (
    <div ref={ref} style={{ marginTop: '1000px', marginBottom: '1000px' }}>
      {count}
    </div>
  );
};

export default Counter;
