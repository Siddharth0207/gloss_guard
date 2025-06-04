import React from 'react';
// Consider importing icon components from lucide-react if available and desired
// import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <div className="container mx-auto">
        {/* Optional: Social Media Icons
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Facebook size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Twitter size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><Instagram size={24} /></a>
        </div>
        */}
        <p className="text-sm">&copy; {new Date().getFullYear()} CarCare Co. All rights reserved.</p>
        <p className="text-xs mt-1">
          Designed with <span className="text-red-500">&hearts;</span> by Your Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
