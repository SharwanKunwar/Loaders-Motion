'use client';

import React from 'react';
import { motion } from 'framer-motion';

const electronOrbitRadius = [60, 90, 120];
const electronSizes = [10, 8, 6];
const orbitTilts = [
  { rotateX: 60, rotateY: 0 },
  { rotateX: 0, rotateY: 60 },
  { rotateX: 45, rotateY: 45 },
];

export default function Loader09() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div
        className="relative w-[400px] h-[400px] rounded-full bg-black border border-gray-800 shadow-xl flex justify-center items-center"
        style={{ perspective: 1000 }}
      >
        {/* Proton at center */}
        <div
          className="absolute rounded-full bg-red-500 z-10"
          style={{
            width: 40,
            height: 40,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 25px 5px rgba(255, 50, 50, 0.6)',
          }}
        />

        {/* Electron Orbits */}
        {electronOrbitRadius.map((radius, i) => (
          <ElectronOrbit
            key={i}
            radius={radius}
            size={electronSizes[i]}
            duration={6 + i * 2}
            tilt={orbitTilts[i]}
          />
        ))}
      </div>
    </div>
  );
}

function ElectronOrbit({ radius, size, duration, tilt }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        transform: `translate(-50%, -50%) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      animate={{ rotateZ: 360 }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
    >
      {/* React-style glowing orbit ring */}
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          border: '1px solid rgba(34, 211, 238, 0.2)',
          boxShadow: `
            0 0 6px rgba(34, 211, 238, 0.4),
            0 0 12px rgba(34, 211, 238, 0.3),
            0 0 24px rgba(34, 211, 238, 0.2)
          `,
        }}
      />

      {/* Electron */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: '#4ade80',
          boxShadow: '0 0 12px #4ade80',
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginLeft: radius,
          marginTop: -size / 2,
        }}
      />
    </motion.div>
  );
}
