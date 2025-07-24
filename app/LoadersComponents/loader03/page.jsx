// components/Loader01.jsx
'use client';

import { motion } from 'framer-motion';

export default function Loader01() {
  return (
    <div className="text-black text-3xl w-full h-full flex justify-center items-center">
      <div className="bg-white/30 backdrop-blur-md border border-white/30 w-full h-full py-20 flex justify-center items-center rounded gap-0">
       <motion.div
        className=' w-[100px] mr-3'>Loading</motion.div>
       <motion.div
       animate={{opacity:[0,1]}}
       transition={{repeat:Infinity, duration:1}}
        className=' flex w-[10px]  text-center rounded-full text-red-400'>.</motion.div>

         <motion.div
       animate={{opacity:[0,1]}}
       transition={{repeat:Infinity, duration:1, delay:0.1}}
        className=' flex w-[10px]  text-center rounded-full text-blue-400'>.</motion.div>

         <motion.div
       animate={{opacity:[0,1]}}
       transition={{repeat:Infinity, duration:1, delay:0.3}}
        className=' flex w-[10px]  text-center rounded-full text-green-400 '>.</motion.div>
      

      </div>

      
    </div>
  );
}
