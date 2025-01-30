import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Import all pages
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// Custom hook for intersection observer (needed by all pages)
export const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState({});
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return isVisible;
};

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Page Content */}
      <div className={`transition-opacity duration-300 ${currentPage === 'home' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <HomePage />
      </div>
      <div className={`transition-opacity duration-300 ${currentPage === 'projects' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <ProjectsPage />
      </div>
      <div className={`transition-opacity duration-300 ${currentPage === 'about' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <AboutPage />
      </div>
      <div className={`transition-opacity duration-300 ${currentPage === 'contact' ? 'opacity-100' : 'opacity-0 hidden'}`}>
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
