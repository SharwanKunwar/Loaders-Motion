'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoaderSequence() {
  const dots = [
    { color: 'bg-red-500' },
    { color: 'bg-blue-500' },
    { color: 'bg-green-500' },
    { color: 'bg-yellow-500' },
    { color: 'bg-purple-500' },
  ];

  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % dots.length);
    }, 1500); // 1.5s per rotation + pause

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-[120px] h-[120px] rounded-full bg-white/10 relative flex justify-center items-center border border-white/20">
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            animate={
              activeDot === index
                ? { rotate: [0,360] }
                : { rotate: 0 }
            }
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <div
              className={`w-3 h-3 rounded-full absolute left-1/2 top-0 -translate-x-1/2 ${dot.color}`}
              style={{ transform: `translateY(-50px)` }}
            />
          </motion.div>
        ))}

        
      </div>
    </div>
  );
}
