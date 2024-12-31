import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github
} from 'lucide-react';
import logo from "./logo.png"

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-blue-500 flex items-center justify-center">
/              <Palette className="w-6 h-6 text-white" />
            </div> */}
            <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600">
              <img src={logo} alt="Logo" width={100} height={100} />
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-red-500 hover:to-blue-500 hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Festiva. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;