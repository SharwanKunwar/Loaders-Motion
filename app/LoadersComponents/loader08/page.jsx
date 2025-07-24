'use client';
import React from 'react';
import { motion } from 'framer-motion';

const planets = [
  { name: 'Mercury', size: 3, orbit: 80, color: 'bg-gray-400', duration: 6, moons: 0 },
  { name: 'Venus', size: 4, orbit: 110, color: 'bg-orange-400', duration: 8, moons: 0 },
  { name: 'Earth', size: 5, orbit: 150, color: 'bg-blue-500', duration: 10, moons: 1 },
  { name: 'Mars', size: 4, orbit: 190, color: 'bg-red-500', duration: 12, moons: 2 },
  { name: 'Jupiter', size: 7, orbit: 240, color: 'bg-yellow-300', duration: 16, moons: 4 },
  { name: 'Saturn', size: 6, orbit: 290, color: 'bg-amber-300', duration: 20, moons: 3, hasRings: true },
  { name: 'Uranus', size: 5, orbit: 340, color: 'bg-teal-300', duration: 24, moons: 2 },
  { name: 'Neptune', size: 5, orbit: 390, color: 'bg-indigo-500', duration: 28, moons: 2 },
];

export default function Loader08() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black relative overflow-hidden">
      {/* ✨ Star background */}
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover opacity-30 z-0" />

      {/* ☀️ Sun */}
      <div className="absolute z-20 w-24 h-24 bg-yellow-400 rounded-full shadow-2xl shadow-yellow-200" />

      {/* Planet Orbits */}
      {planets.map((planet, index) => (
        <motion.div
          key={planet.name}
          className="absolute border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: planet.duration, ease: 'linear' }}
          style={{
            width: `${planet.orbit * 2}px`,
            height: `${planet.orbit * 2}px`,
            zIndex: 10 - index,
          }}
        >
          <div className="w-full h-full flex justify-start items-center relative">
            {/* 🌍 Planet */}
            <div
              className={`relative ${planet.color} rounded-full shadow-md flex items-center justify-center`}
              style={{
                width: `${planet.size * 4}px`,
                height: `${planet.size * 4}px`,
              }}
            >
              {/* 🪐 Saturn's Rings */}
              {planet.hasRings && (
                <div className="absolute w-[200%] h-[200%] border border-amber-100/30 rounded-full rotate-45"></div>
              )}

              {/* 🌕 Moons + Orbit Rings */}
              {Array.from({ length: planet.moons }).map((_, moonIndex) => {
                // Increase moon orbit radius to separate moons nicely
                const baseMoonOrbit = planet.size * 6; // bigger base radius than before
                const spacing = 15; // space between moon orbits
                const moonOrbitSize = baseMoonOrbit + moonIndex * spacing;

                return (
                  <motion.div
                    key={`moon-orbit-${moonIndex}`}
                    className="absolute top-1/2 left-1/2 rounded-full border border-white/20"
                    style={{
                      width: `${moonOrbitSize}px`,
                      height: `${moonOrbitSize}px`,
                      marginTop: `-${moonOrbitSize / 2}px`,
                      marginLeft: `-${moonOrbitSize / 2}px`,
                      zIndex: 5,
                      // subtle glow for orbit rings
                      boxShadow: '0 0 6px rgba(255, 255, 255, 0.1)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + moonIndex * 2, // different speeds for each moon
                      ease: 'linear',
                    }}
                  >
                    {/* The moon itself */}
                    <div className="w-3 h-3 bg-white rounded-full shadow-sm absolute top-1/2 left-0 -translate-y-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
