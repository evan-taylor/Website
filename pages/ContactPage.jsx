import React from 'react';
import { Mail, MapPin, Github, Linkedin, Building2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks.js'; // Fixed import path

const ContactPage = () => {
  const isVisible = useIntersectionObserver();
  const fadeInClass = "opacity-100 translate-y-0 transition-all duration-1000";
  const fadeOutClass = "opacity-0 translate-y-8 transition-all duration-1000";

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <section id="contact" className={`${isVisible["contact"] ? fadeInClass : fadeOutClass}`}>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h1>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { title: "Email", value: "evan@evan-taylor.com", icon: Mail, color: "blue", link: "mailto:evan@evan-taylor.com" },
                  { title: "Location", value: "San Luis Obispo, CA", icon: MapPin, color: "green" },
                  { title: "University", value: "Cal Poly, San Luis Obispo", icon: Building2, color: "purple" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`bg-${item.color}-100 p-3 rounded-lg`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-blue-600 hover:underline">{item.value}</a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect Online</h2>
              {[
                { title: "LinkedIn", url: "https://www.linkedin.com/in/evan-l-taylor/", icon: Linkedin, color: "blue" },
                { title: "GitHub", url: "https://github.com/evan-taylor", icon: Github, color: "gray" }
              ].map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className={`bg-${item.color}-100 p-3 rounded-lg group-hover:bg-${item.color}-200 transition-colors`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">Professional Profile</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Message */}
          <div className={`mt-8 bg-white rounded-lg shadow-sm p-8 border border-gray-100 ${isVisible["message"] ? fadeInClass : fadeOutClass}`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm always interested in discussing new opportunities and projects. Feel free to reach out!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;