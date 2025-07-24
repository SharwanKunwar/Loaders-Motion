// components/Loader01.jsx
'use client';

import { motion } from 'framer-motion';

export default function Loader01() {
  return (
    <div className="text-black text-3xl w-full h-full flex justify-center items-center">
      <div className="bg-white/30 backdrop-blur-md border border-white/30  w-full h-full py-20 flex justify-center items-center rounded gap-1">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0 }}
          className="bg-white border border-black/30 w-[40px] h-[40px] rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
          className="bg-white border border-black/30 w-[40px] h-[40px] rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
          className="bg-white border border-black/30 w-[40px] h-[40px] rounded-full"
        />
      </div>
    </div>
  );
}
