import React from "react";
import { motion } from "framer-motion";
import { BackgroundLines } from "./components/ui/background-lines";

function App() {
  return (
    <div className="relative h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Gloss Guard</h1>
          <p className="text-xl text-gray-300">
            Protect your Car with our Cutting Edge Paint Protection Solutions
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
