import React from 'react';
import { Terminal, Code } from 'lucide-react';
import { useIntersectionObserver } from '../src/App.jsx';

const ProjectsPage = () => {
  const isVisible = useIntersectionObserver();
  const fadeInClass = "opacity-100 translate-y-0 transition-all duration-1000";
  const fadeOutClass = "opacity-0 translate-y-8 transition-all duration-1000";

  const projects = [
    {
      title: "Machine Learning Classification",
      description: "Implemented various classification algorithms including Random Forest and SVM for predictive analytics.",
      tech: ["Python", "scikit-learn", "pandas"],
      icon: <Terminal className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a responsive portfolio website using modern web technologies.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      icon: <Code className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <section
              key={index}
              id={`project-${index}`}
              className={`${
                isVisible[`project-${index}`] ? fadeInClass : fadeOutClass
              } bg-white rounded-lg shadow-sm p-6 border border-gray-100`}
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;