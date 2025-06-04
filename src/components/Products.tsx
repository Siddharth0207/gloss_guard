import React from 'react';
import { motion } from 'framer-motion';
// import { ShoppingCart } from 'lucide-react'; // Example icon

// Placeholder product data
const products = [
  {
    id: 1,
    name: 'Ultimate Wax Polish',
    description: 'Provides a deep, long-lasting shine and protection.',
    price: '$25.99',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Car+Wax', // Placeholder image
    category: 'Protection',
  },
  {
    id: 2,
    name: 'Interior Detailer Spray',
    description: 'Cleans and protects all interior surfaces.',
    price: '$18.50',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Interior+Spray', // Placeholder image
    category: 'Cleaning',
  },
  {
    id: 3,
    name: 'Tire Shine Gel',
    description: 'Gives your tires a rich, black, wet look.',
    price: '$15.75',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Tire+Shine', // Placeholder image
    category: 'Appearance',
  },
  {
    id: 4,
    name: 'Microfiber Towel Set',
    description: 'Ultra-soft and absorbent for all detailing tasks.',
    price: '$22.00',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Microfiber+Towels', // Placeholder image
    category: 'Accessories',
  },
];

const ProductCard: React.FC<typeof products[0]> = ({ name, description, price, imageUrl, category }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover"/>
      <div className="p-6 text-white">
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">{category}</span>
        <h3 className="text-2xl font-bold my-2">{name}</h3>
        <p className="text-gray-300 text-sm mb-4 h-16 overflow-hidden">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-green-400">{price}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            {/* <ShoppingCart size={18} className="inline mr-1" /> */}
            Inquire
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
            <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
                Contact Us for More
            </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
