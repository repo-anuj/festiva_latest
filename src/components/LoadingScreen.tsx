import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [showTagline, setShowTagline] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Sequence timing
    const taglineTimer = setTimeout(() => {
      setShowTagline(false);
      setShowLogo(true);
    }, 2000);

    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 4000);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {showTagline && (
          <motion.div
            key="tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="text-3xl md:text-4xl font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {["Design", "Create", "Innovate"].map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="inline-block mx-2 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-blue-600 to-red-600"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}

        {showLogo && (
          <motion.div
            key="logo"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-blue-600 to-red-600"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Festiva
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingScreen;