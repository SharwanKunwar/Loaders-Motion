'use client';

import React from 'react'
import {motion} from 'motion/react';

function loader04() {
  return (
    <div className='w-full h-full flex justify-center items-center'>

      <div className='bg-gray-500 w-[90%] h-[90%] rounded-md flex justify-center items-center'>
        
        <motion.div 
        animate={{rotate:360}}
        transition={{repeat:Infinity, duration:1}}
        className='w-[100px] h-[100px] rounded-full   border-t-3 shadow-md  border-white'>
        </motion.div>

        <div className='w-[100px] h-[100px] rounded-full border border-white/30 rotate-45 shadow-md absolute'></div>
      </div>
    </div>
  )
}

export default loader04
