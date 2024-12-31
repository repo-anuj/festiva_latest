import React from 'react';
import { motion } from 'framer-motion';

const BackgroundShapes = () => {
  return (
    <>
      {/* Animated shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-500/10 rounded-full mix-blend-multiply filter blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          scale: [1.2, 1, 1.2],
          rotate: [360, 270, 180, 90, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl"
      />
      
      {/* Decorative lines */}
      <motion.div
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1,
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L100 100"
            className="stroke-red-500/20"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default BackgroundShapes;