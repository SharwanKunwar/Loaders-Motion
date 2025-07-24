'use client';

import React from 'react';
import { motion } from 'framer-motion';

const particleOrbitConfigs = [
  // [radius, size, duration, color, tiltX, tiltY, type]
  [60, 10, 6, '#4ade80', 60, 0, 'electron'],
  [90, 10, 8, '#4ade80', 0, 60, 'electron'],
  [120, 10, 10, '#4ade80', 45, 45, 'electron'],

  [70, 12, 7, '#f87171', 30, 30, 'proton'],
  [100, 12, 9, '#f87171', 75, 15, 'proton'],
];

export default function LoaderNucleus() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div
        className="relative w-[400px] h-[400px] rounded-full border border-gray-800 shadow-xl flex justify-center items-center"
        style={{ perspective: 1000 }}
      >
        {/* Invisible/neutral nucleus */}
        <div
          className="absolute rounded-full bg-white/10 z-0"
          style={{
            width: 20,
            height: 20,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.3)',
          }}
        />

        {/* Orbiting particles */}
        {particleOrbitConfigs.map(([radius, size, duration, color, rotateX, rotateY, type], i) => (
          <ParticleOrbit
            key={i}
            radius={radius}
            size={size}
            duration={duration}
            color={color}
            tilt={{ rotateX, rotateY }}
          />
        ))}
      </div>
    </div>
  );
}

function ParticleOrbit({ radius, size, duration, color, tilt }) {
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
      {/* Optional glowing ring path */}
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          border: '1px dashed rgba(255,255,255,0.05)',
        }}
      />

      {/* Particle */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: color,
          boxShadow: `0 0 12px ${color}`,
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
