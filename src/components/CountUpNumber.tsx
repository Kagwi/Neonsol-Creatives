import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        if (countRef.current !== currentCount) {
          countRef.current = currentCount;
          setCount(currentCount);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-primary-600 text-5xl font-bold mb-2">
      {count}{suffix}
    </div>
  );
};

export default CountUpNumber;