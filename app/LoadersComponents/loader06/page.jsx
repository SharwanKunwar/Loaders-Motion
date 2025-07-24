'use client';

import React from 'react'
import {motion} from 'motion/react';

function loader04() {
  return (
    <div className='w-full h-full flex justify-center items-center'>

      <div className='bg-gray-500 w-[90%] h-[90%] rounded-md flex justify-center items-center'>
        
        <motion.div 
        animate={{rotate:720}}
        transition={{repeat:Infinity, duration:2}}
        className='w-[100px] h-[100px] border rounded-3xl shadow-md border-white'>
        </motion.div>

        <motion.div 
        animate={{rotate:360}}
        transition={{repeat:Infinity, duration:3}}
        className='w-[100px] h-[100px] rounded-3xl border border-white/30 rotate-45 shadow-md absolute'></motion.div>

       <motion.div 
        animate={{rotate:1960,scale:0.3,opacity:[0,10,0]}}
        transition={{repeat:Infinity, duration:3}}
        className='w-[100px] h-[100px] rounded-3xl border-2 border-white/30 rotate-45 shadow-md absolute'></motion.div>
      </div>
    </div>
  )
}

export default loader04
