import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Shapes, 
  // Sparkles, 
  Globe, 
  Smartphone, 
  Code2, 
  Lightbulb,
  Rocket,
  Target
} from 'lucide-react';
import BentoItem from './BentoItem';

interface BentoGridProps {
  inView: boolean;
}

const BentoGrid: React.FC<BentoGridProps> = ({ inView }) => {
  const features = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences that delight and inspire.",
      icon: Palette,
      color: "red",
      size: "large"
    },
    {
      title: "Brand Identity",
      description: "Building memorable brands that stand out in the digital landscape.",
      icon: Shapes,
      color: "blue",
      size: "small"
    },
    {
      title: "Web Development",
      description: "Creating powerful, scalable web applications with cutting-edge technology.",
      icon: Code2,
      color: "red",
      size: "small"
    },
    {
      title: "Mobile Apps",
      description: "Developing native and cross-platform mobile applications.",
      icon: Smartphone,
      color: "blue",
      size: "medium"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence.",
      icon: Target,
      color: "red",
      size: "small"
    },
    {
      title: "Global Reach",
      description: "Connecting your brand with audiences worldwide.",
      icon: Globe,
      color: "blue",
      size: "medium"
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with creative solutions and cutting-edge technology.",
      icon: Lightbulb,
      color: "red",
      size: "small"
    },
    {
      title: "Performance",
      description: "Optimizing for speed, efficiency, and scalability.",
      icon: Rocket,
      color: "blue",
      size: "large"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4"
    >
      {features.map((feature, index) => (
        <BentoItem
          key={index}
          feature={feature}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default BentoGrid;