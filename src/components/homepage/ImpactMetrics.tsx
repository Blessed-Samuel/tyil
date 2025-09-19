"use client";
import React, { useEffect, useState, useRef } from "react";

type MetricProps = {
  target: number;
  suffix: string;
  label: string;
};

const RollingCounter: React.FC<MetricProps> = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect(); // Disconnect immediately after triggering

            const duration = 2000;
            const startTime = Date.now();
            const startValue = Math.max(0, target - 100); // Start closer to target

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function for smooth acceleration/deceleration
              const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
              const easedProgress = easeOutCubic(progress);

              const currentValue = Math.floor(
                startValue + (target - startValue) * easedProgress
              );
              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(target);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-between"
    >
      {/* Rolling number */}
      <div className="text-6xl md:text-9xl font-bold text-white overflow-hidden">
        <span className="inline-block tracking-tight animate-[roll_0.2s_ease-in-out]">
          {count}
        </span>
        {suffix}
      </div>
      {/* Label */}
      <p className="text-white text-lg md:text-2xl mt-2">{label}</p>
    </div>
  );
};

// Custom animation
const ImpactMetrics: React.FC = () => {
  return (
    <section className="bg-primaryRed md:py-12 py-24 px-6">
      <div className="flex gap-18 md:flex-row flex-col justify-between items-center text-center">
        <RollingCounter target={2500} suffix="+" label="High School Students" />

        {/* divider-1 */}
        <div className="bg-gradient-to-r md:bg-gradient-to-t from-primaryRed via-primaryWhite mask-b-to-primaryRed md:h-[150px] md:w-[1.4px] w-[300px] h-[1.4px]"></div>

        <RollingCounter target={130} suffix="+" label="Post Secondary Youths" />

        {/* divider-2 */}
        <div className="bg-gradient-to-r md:bg-gradient-to-t from-primaryRed via-primaryWhite mask-b-to-primaryRed md:h-[150px] w-[300px] h-[1.4px] md:w-[1.4px]"></div>

        <RollingCounter target={5} suffix="+" label="Programs" />
      </div>
    </section>
  );
};

export default ImpactMetrics;
