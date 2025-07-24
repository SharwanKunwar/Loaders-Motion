'use client';

import React from 'react'
import {motion} from 'motion/react';

function loader04() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <motion.div 
      animate={{rotate:360}}
      transition={{repeat:Infinity, duration:1}}
      className='w-[100px] h-[100px]  border rounded border-white'></motion.div>
      <div className='w-[100px] h-[100px] border rotate-45 absolute rounded'></div>
    </div>
  )
}

export default loader04
