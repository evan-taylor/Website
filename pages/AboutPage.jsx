import React from 'react';
import { GraduationCap, Heart, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../hooks.js'; // Fixed import path

const AboutPage = () => {
  const isVisible = useIntersectionObserver();
  const fadeInClass = "opacity-100 translate-y-0 transition-all duration-1000";
  const fadeOutClass = "opacity-0 translate-y-8 transition-all duration-1000";

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Bio Section */}
        <section id="bio" className={`mb-16 ${isVisible["bio"] ? fadeInClass : fadeOutClass}`}>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-6">
              Hi! I'm Evan. Born and raised in Vancouver, WA, I've always been fascinated by computers.
              My journey into programming began in 8th grade when I decided to teach myself how to code.
              This early interest solidified my decision to pursue Computer Science.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At 16, I started working as a Lifeguard, which led me to found Taylored Instruction LLC,
              an American Red Cross Licensed Training Provider and American Heart Association Training Site.
              We provide high-quality health and safety training, including CPR courses and Lifeguard certification.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className={`space-y-8 ${isVisible["timeline"] ? fadeInClass : fadeOutClass}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">My Journey</h2>

          {[
            { title: "Hockinson High School", year: "2024", icon: GraduationCap, color: "blue", 
              description: "Graduated from Hockinson High School in Hockinson, WA. I was captain of the boys varsity swim team, a varsity golf player, and involved in Future Business Leaders of America." },
            { title: "Clark College", year: "2024", icon: Heart, color: "purple", 
              description: "Completed my studies at Clark College with a focus on Computer Science, building a foundation in Python, C, HTML/CSS, and JavaScript. All credits transferred to Cal Poly SLO." },
            { title: "California Polytechnic State University", year: "Expected 2028", icon: Briefcase, color: "green", 
              description: "Currently pursuing my Bachelor's in Computer Science with a concentration in Privacy and Security. I'm also working towards a minor in Entrepreneurship." }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className={`bg-${item.color}-100 p-3 rounded-lg`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <span className={`text-${item.color}-600 font-medium`}>{item.year}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AboutPage;