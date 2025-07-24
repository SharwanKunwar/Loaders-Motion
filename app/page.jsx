'use client'

import Link from "next/link";
import {motion} from 'motion/react';
import { useEffect, useState } from "react";
import Loading from "./dashboard/Loading";


export default function Home({children}) {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    const handleLoad = () =>{
      setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
    };

    if(document.readyState === 'complete'){
      handleLoad();
    }else{
      window.addEventListener('load',handleLoad);
    }
    return() => window.removeEventListener('load',handleLoad);
  },[]);


  return (
    <>
    {!isLoaded ?
      <div>
        <Loading/>
      </div>
    : 
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="md:text-4xl text-2xl font-bold ">Welcome to the Loader Demo</h1>
      <p className="mb-7 px-10 text-neutral-400 w-full text-center">You can try different types of loading animation. build using motion</p>
      <Link href="/LoadersComponents" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        Go to Loaders
      </Link>

      <motion.p 
      animate={{opacity:[0,10,0]}}
      transition={{repeat:Infinity,duration:2}}
      className="mt-6 text-red-400">Roatate for better Expirence</motion.p>
    </main>
     }

    
    </>
  );
}
