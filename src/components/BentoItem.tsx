import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  size: string;
}

interface BentoItemProps {
  feature: Feature;
  index: number;
}

const BentoItem: React.FC<BentoItemProps> = ({ feature, index }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      },
    },
  };

  const Icon = feature.icon;
  const isLarge = feature.size === 'large';
  const colorClass = feature.color === 'red' ? 'from-red-500 to-red-600' : 'from-blue-500 to-blue-600';

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative ${
        isLarge ? 'lg:col-span-2 lg:row-span-2' : 'col-span-1'
      } rounded-3xl p-8 bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 border border-gray-200 transition-all duration-300 hover:shadow-lg`}
      whileHover={{ y: -5 }}
      style={{ 
        gridRow: isLarge ? 'span 2' : 'span 1',
        minHeight: isLarge ? '400px' : '200px'
      }}
    >
      <div className="h-full flex flex-col">
        <motion.div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {feature.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        <motion.div
          className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BentoItem;