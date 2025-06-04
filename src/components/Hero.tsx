import React from 'react';
import { motion } from 'framer-motion'; // For animations

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 md:py-32 text-center bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Premium Care for Your Prized Ride
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300"
        >
          Discover our exclusive range of car care & detailing products, engineered for perfection and shine that lasts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#products"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Products
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
