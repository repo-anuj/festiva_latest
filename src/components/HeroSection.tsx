import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Palette, Shapes } from 'lucide-react';
import BackgroundShapes from './BackgroundShapes';

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <BackgroundShapes />
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={itemVariants}
          className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />

        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-red-500" />
          <span className="text-blue-600 font-medium">Premium Design Studio</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-blue-600 to-red-600"
        >
          Innovating Design,
          <br />
          Captivating Results
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-center text-gray-600 text-lg mb-8"
        >
          We transform ideas into extraordinary digital experiences through innovative design
          and cutting-edge creativity. Let's bring your vision to life.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white rounded-full font-medium shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl"
        >
          {[
            {
              icon: <Palette className="w-6 h-6 text-red-500" />,
              title: "Creative Design",
              description: "Unique and innovative design solutions"
            },
            {
              icon: <Shapes className="w-6 h-6 text-blue-600" />,
              title: "Brand Identity",
              description: "Distinctive and memorable branding"
            },
            {
              icon: <Sparkles className="w-6 h-6 text-red-500" />,
              title: "Digital Excellence",
              description: "Cutting-edge digital experiences"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-3">{feature.icon}</div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;