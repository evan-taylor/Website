import React from 'react';
import { motion } from "framer-motion"; // Import Framer Motion
import { Mail, MapPin, Github, Linkedin, Building2 } from 'lucide-react';
import { useIntersectionObserver } from '../src/hooks.js'; // Fixed import path

const ContactPage = () => {
  const isVisible = useIntersectionObserver();

  // Animation Variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contactInfo = [
    { title: "Email", value: "evan@evan-taylor.com", icon: Mail, color: "blue", link: "mailto:evan@evan-taylor.com" },
    { title: "Location", value: "San Luis Obispo, CA", icon: MapPin, color: "green" },
    { title: "University", value: "Cal Poly, San Luis Obispo", icon: Building2, color: "purple" }
  ];

  const socialLinks = [
    { title: "LinkedIn", url: "https://www.linkedin.com/in/evan-l-taylor/", icon: Linkedin, color: "blue" },
    { title: "GitHub", url: "https://github.com/evan-taylor", icon: Github, color: "gray" }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.section 
          id="contact"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h1>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate={isVisible.contact ? "visible" : "hidden"}
              variants={fadeInVariant}
              className="bg-white rounded-lg shadow-sm p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
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
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial="hidden"
              animate={isVisible.contact ? "visible" : "hidden"}
              variants={fadeInVariant}
              className="bg-white rounded-lg shadow-sm p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect Online</h2>
              {socialLinks.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                  }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className={`bg-${item.color}-100 p-3 rounded-lg group-hover:bg-${item.color}-200 transition-colors`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">Professional Profile</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Additional Message */}
          <motion.div
            initial="hidden"
            animate={isVisible.message ? "visible" : "hidden"}
            variants={fadeInVariant}
            className="mt-8 bg-white rounded-lg shadow-sm p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm always interested in discussing new opportunities and projects. Feel free to reach out!
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;