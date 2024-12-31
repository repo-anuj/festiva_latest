import React from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from './PortfolioItem';

interface ScrollingGridProps {
  inView: boolean;
}

const ScrollingGrid: React.FC<ScrollingGridProps> = ({ inView }) => {
  const portfolioItems = [
    {
      title: "Modern Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Digital Experience",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Creative Direction",
      category: "Art Direction",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mobile App Design",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Print Design",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Product Design",
      category: "3D Design",
      image: "https://images.unsplash.com/photo-1635348729202-7211f7f0b8f1?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <PortfolioItem
          key={index}
          item={item}
          index={index}
          inView={inView}
        />
      ))}
    </div>
  );
};

export default ScrollingGrid;