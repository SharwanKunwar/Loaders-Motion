'use client';

import React from 'react'
import {motion} from 'motion/react';

function loader04() {

    return (
    <div className='w-full h-full flex justify-center items-center'>

    <div className='bg-black w-[90%] h-[90%] rounded-md flex justify-center items-center relative'>
        <motion.div 
        animate={{rotate:0}}
        transition={{repeat:Infinity,type:'spring', ease:'easeInOut'}}
        className='border border-white/30 w-[200px] h-[200px] rounded-full z-20 flex justify-center items-center'>

        <motion.div 
        animate={{rotate:[360,45]}}
        transition={{repeat:Infinity,duration:1,type:'spring', ease:'easeInOut'}}
        className='border border-white/30 w-[100px] h-[100px] rounded absolute'></motion.div> 
        <motion.div 
        animate={{rotate:360}}
        transition={{repeat:Infinity,duration:1,type:'spring', ease:'easeInOut'}}
        className='border border-white/30 w-[100px] h-[100px] rounded absolute'></motion.div> 
        
        </motion.div>    

        <motion.div 
        animate={{rotate:[360,45]}}
        transition={{repeat:Infinity,duration:1,type:'spring', ease:'easeInOut'}}
        className='border-5 border-white w-[200px] h-[200px] rounded-full absolute'>
            <div className='border border-white/30 w-[50px] h-[50px] rounded-full'></div>
            <div className='border border-white/30 w-[50px] h-[50px] rounded-full absolute bottom-0 right-0'></div>
            <div className='border border-white/30 w-[50px] h-[50px] rounded-full absolute top-0 right-0'></div>
            <div className='border border-white/30 w-[50px] h-[50px] rounded-full absolute left-0 bottom-0'></div>    
        </motion.div>    

        
    </div>

    </div>
)
}

export default loader04
