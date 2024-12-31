// import React from 'react';
import { motion } from 'framer-motion';
// import { Palette } from 'lucide-react';
import logo from "./logo.png"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-blue-500 flex items-center justify-center">
            <Palette className="w-6 h-6 text-white" />
          </div> */}
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600">
          <img src={logo} alt="Logo" width={100} height={100} />
          </span>
        </motion.div>

        {/* Join Us Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
        >
          Join Us
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;