import React from 'react';
import { motion } from "framer-motion"; // Import Framer Motion
import { Terminal, Code, Globe, Database, BarChart, Layers } from 'lucide-react';
import { useIntersectionObserver } from '../src/hooks.js';

const ProjectsPage = () => {
  const isVisible = useIntersectionObserver();

  // Animation Variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const projects = [
    {
      id: "ml-classification",
      title: "Machine Learning Classification",
      description: "Implemented various classification algorithms including Random Forest and SVM for predictive analytics.",
      tech: ["Python", "scikit-learn", "pandas"],
      icon: <Terminal className="w-8 h-8 text-primary" />
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description: "Designed and developed a responsive portfolio website using modern web technologies.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      icon: <Code className="w-8 h-8 text-primary" />
    },
    {
      id: "web-scraping",
      title: "Automated Web Scraper",
      description: "Built a web scraper to collect real-time data from multiple sources and generate insights.",
      tech: ["Python", "BeautifulSoup", "Selenium"],
      icon: <Globe className="w-8 h-8 text-primary" />
    },
    {
      id: "database-design",
      title: "Relational Database Design",
      description: "Designed a scalable relational database system for a small business to manage inventory and sales.",
      tech: ["SQL", "PostgreSQL", "MongoDB"],
      icon: <Database className="w-8 h-8 text-primary" />
    },
    {
      id: "data-visualization",
      title: "Interactive Data Visualization Dashboard",
      description: "Created an interactive dashboard for analyzing sales trends using real-time data.",
      tech: ["JavaScript", "D3.js", "Chart.js"],
      icon: <BarChart className="w-8 h-8 text-primary" />
    },
    {
      id: "fullstack-app",
      title: "Full-Stack MERN Application",
      description: "Developed a full-stack app with user authentication, CRUD functionality, and a REST API.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: <Layers className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial="hidden" 
          animate="visible"
          variants={fadeInVariant}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Projects
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.section
              key={project.id}
              id={project.id}
              initial="hidden"
              animate={isVisible[project.id] ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
              }}
              className="bg-white dark:bg-secondary rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-primary dark:text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;