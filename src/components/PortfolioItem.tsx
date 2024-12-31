import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  item: {
    title: string;
    category: string;
    image: string;
  };
  index: number;
  inView: boolean;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index, inView }) => {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-red-400 font-medium mb-2">{item.category}</p>
          <h3 className="text-white text-xl font-semibold">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;