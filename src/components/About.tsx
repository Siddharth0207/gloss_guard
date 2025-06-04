import React from 'react';
import { motion } from 'framer-motion';
// import { Users, Target, Eye } from 'lucide-react'; // Example icons

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          About CarCare Co.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/600x400.png?text=Our+Workshop"
              alt="Our Workshop"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Driven by Passion, Defined by Quality</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              At CarCare Co., we believe that every car deserves to look its absolute best. Founded by a team of enthusiasts,
              our mission is to provide fellow car lovers with premium-grade products that deliver professional results
              without the professional price tag.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We meticulously formulate and source the finest ingredients to ensure our waxes, polishes, cleaners, and protectants
              not only meet but exceed your expectations. Whether you're a weekend warrior or a seasoned detailer,
              our products are designed for ease of use and exceptional performance.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Join the CarCare Co. family and experience the difference that passion and quality can make to your vehicle's shine and protection.
            </p>
          </motion.div>
        </div>

        {/* Optional: Could add a section for Mission/Vision or Team later */}
        {/*
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="p-6 bg-gray-700 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Users size={40} className="mx-auto mb-3 text-blue-400" />
            <h4 className="text-xl font-semibold mb-2">Our Community</h4>
            <p className="text-gray-400 text-sm">Join a growing family of car enthusiasts.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Target size={40} className="mx-auto mb-3 text-blue-400" />
            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="text-gray-400 text-sm">To provide top-tier car care solutions for everyone.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Eye size={40} className="mx-auto mb-3 text-blue-400" />
            <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
            <p className="text-gray-400 text-sm">To be the most trusted name in car care.</p>
          </motion.div>
        </div>
        */}
      </div>
    </section>
  );
};

export default About;
