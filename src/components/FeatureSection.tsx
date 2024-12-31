// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BentoGrid from './BentoGrid';

const FeatureSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-blue-600 to-red-600"
          >
            Crafting Digital Excellence
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover our comprehensive suite of design and development services
            that bring your vision to life with precision and creativity.
          </motion.p>
        </div>
        
        <BentoGrid inView={inView} />
      </motion.div>
    </section>
  );
};

export default FeatureSection;