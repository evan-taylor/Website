import React from 'react';
import { motion } from "framer-motion"; // Import framer-motion
import { Mail, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../src/hooks.js'; // Corrected import path

const HomePage = () => {
  const isVisible = useIntersectionObserver();

  // Animation Variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* Header */}
      <motion.header 
        initial="hidden" 
        animate="visible"
        variants={fadeInVariant}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mt-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Evan Taylor</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:evan@evan-taylor.com" className="hover:underline">
                evan@evan-taylor.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>San Luis Obispo, CA</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Objective */}
        <motion.section 
          id="objective"
          initial="hidden"
          animate={isVisible.objective ? "visible" : "hidden"}
          variants={fadeInVariant}
          className="opacity-100 translate-y-0 transition-all duration-700"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Objective</h2>
          <p className="text-gray-600 leading-relaxed">
            Motivated Computer Science student at California Polytechnic State University with a strong foundation in software development, data structures, and systems design. Eager to leverage experience in Python, Java, and C to contribute to innovative projects in technology. Passionate about machine learning and UI/UX design.
          </p>
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;