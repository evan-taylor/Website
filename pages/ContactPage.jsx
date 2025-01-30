import React from 'react';
import { Mail, MapPin, Github, Linkedin, Building2 } from 'lucide-react';
import { useIntersectionObserver } from '../App.jsx';

const ContactPage = () => {
  const isVisible = useIntersectionObserver();
  const fadeInClass = "opacity-100 translate-y-0 transition-all duration-1000";
  const fadeOutClass = "opacity-0 translate-y-8 transition-all duration-1000";

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <section id="contact" className={`${isVisible.contact ? fadeInClass : fadeOutClass}`}>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h1>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <a
                      href="mailto:evan@evan-taylor.com"
                      className="text-blue-600 hover:underline"
                    >
                      evan@evan-taylor.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Location</h3>
                    <p className="text-gray-600">San Luis Obispo, CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">University</h3>
                    <p className="text-gray-600">Cal Poly, San Luis Obispo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect Online</h2>
              <div className="space-y-6">
                <a 
                  href="https://www.linkedin.com/in/evan-l-taylor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">LinkedIn</h3>
                    <p className="text-gray-600">Professional Profile</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/evan-taylor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-gray-200 transition-colors">
                    <Github className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">GitHub</h3>
                    <p className="text-gray-600">Code & Projects</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Additional Message */}
          <div className={`mt-8 bg-white rounded-lg shadow-sm p-8 border border-gray-100 ${isVisible.message ? fadeInClass : fadeOutClass}`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm always interested in discussing new opportunities, technology, and innovative projects. 
              Whether you want to talk about potential collaborations, have questions about my work, 
              or just want to say hello, feel free to reach out through any of the channels above.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;