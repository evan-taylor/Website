import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Import all pages
import HomePage from '../pages/HomePage.jsx';
import ProjectsPage from '../pages/ProjectsPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';

// Import global styles (make sure this is in index.jsx too)
import '../src/index.css';

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">ET</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-200`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600'
                } block w-full text-left py-2`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Reapply fade animations for smooth transitions
  const fadeInClass = "opacity-100 translate-y-0 transition-all duration-1000";
  const fadeOutClass = "opacity-0 translate-y-8 transition-all duration-1000";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Page Content */}
      <div className={`${currentPage === 'home' ? fadeInClass : fadeOutClass}`}>
        <HomePage />
      </div>
      <div className={`${currentPage === 'projects' ? fadeInClass : fadeOutClass}`}>
        <ProjectsPage />
      </div>
      <div className={`${currentPage === 'about' ? fadeInClass : fadeOutClass}`}>
        <AboutPage />
      </div>
      <div className={`${currentPage === 'contact' ? fadeInClass : fadeOutClass}`}>
        <ContactPage />
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Evan Taylor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;