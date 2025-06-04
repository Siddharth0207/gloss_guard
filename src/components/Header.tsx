import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-300">CarCare Co.</a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#products" className="hover:text-blue-300">Products</a></li>
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
