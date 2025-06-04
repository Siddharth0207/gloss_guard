import React from "react";
import { BackgroundLines } from "./components/ui/background-lines";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-white dark:bg-black">
      {/* It's possible BackgroundLines might be better inside the main tag if Header/Footer are outside its effect */}
      {/* Or, each section component could optionally include its own BackgroundLines if needed for specific effects */}
      {/* For now, keep it as a global background */}
      <BackgroundLines svgOptions={{ duration: 10 }} className="absolute inset-0 -z-10 w-full h-full" />

      <Header />

      {/* The main tag itself might not need 'container mx-auto px-4 py-8' if components manage their own containers */}
      {/* Let's remove it from <main> and ensure each section component has its own container if needed. */}
      {/* Most section components (Hero, Products, About, Contact) already have a <div className="container mx-auto px-4"> inside them. */}
      <main className="flex-grow">
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
