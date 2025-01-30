import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../src/App.jsx';

const HomePage = () => {
  const isVisible = useIntersectionObserver();
  const fadeInClass = "opacity-100 translate-y-0 transition-all duration-1000";
  const fadeOutClass = "opacity-0 translate-y-8 transition-all duration-1000";

  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mt-16">
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
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,1.56-1.56A1.56,1.56,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
              </svg>
              <a href="https://www.linkedin.com/in/evan-l-taylor/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <a href="https://github.com/evan-taylor" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Objective */}
        <section id="objective" className={`${isVisible.objective ? fadeInClass : fadeOutClass}`}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Objective</h2>
          <p className="text-gray-600 leading-relaxed">
            Motivated Computer Science student at California Polytechnic State University with a strong foundation in software development, data structures, and systems design. Eager to leverage experience in Python, Java, and C to contribute to innovative projects in technology. Passionate about machine learning and UI/UX design. Seeking to apply strong problem-solving skills and a collaborative mindset to drive impactful solutions while gaining hands-on industry experience.
          </p>
        </section>

        {/* Education */}
        <section id="education" className={`${isVisible.education ? fadeInClass : fadeOutClass}`}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800">California Polytechnic State University</h3>
            <p className="text-gray-600">San Luis Obispo, CA</p>
            <p className="text-gray-600 mb-2">Bachelor's of Science in Computer Science</p>
            <p className="text-gray-600 italic">Expected Graduation: June 2028</p>
            <ul className="list-disc ml-6 mt-4 text-gray-600">
              <li>Currently pursuing courses in programming, algorithms, and software development.</li>
              <li>Interested in pursuing a minor in Entrepreneurship</li>
            </ul>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className={`${isVisible.experience ? fadeInClass : fadeOutClass}`}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Work Experience</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Taylored Instruction LLC</h3>
                  <p className="text-gray-600">Founder</p>
                </div>
                <p className="text-gray-600">May 2023-Present</p>
              </div>
              <p className="text-gray-600 mb-2">Vancouver, WA</p>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Founded and operate a company providing health and safety training, emphasizing customer service, communication, and organization.</li>
                <li>Partner with local organizations and manage both public and private classes, ensuring a high level of customer satisfaction.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Clark County Family YMCA</h3>
                  <p className="text-gray-600">Aquatics Lead</p>
                </div>
                <p className="text-gray-600">January 2021-September 2024</p>
              </div>
              <p className="text-gray-600 mb-2">Vancouver, WA</p>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Supervised over 50 lifeguards and swim instructors, ensuring consistent customer service and safety standards.</li>
                <li>Conducted training courses in Lifeguarding and CPR for the public, requiring clear communication and patience.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Royal Oaks Country Club</h3>
                  <p className="text-gray-600">Lead Lifeguard/Lead Swim Instructor</p>
                </div>
                <p className="text-gray-600">May 2023-September 2024</p>
              </div>
              <p className="text-gray-600 mb-2">Vancouver, WA</p>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Led a team of 10 lifeguards, managing daily operations including scheduling, safety protocols, and customer interactions.</li>
                <li>Developed and implemented group and private swim lessons, maintaining excellent communication with parents and children to ensure a positive experience.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={`${isVisible.skills ? fadeInClass : fadeOutClass}`}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Strong interpersonal and communication skills developed through teaching and training experiences.</li>
              <li>Proven leadership in team settings, including managing operations and customer service.</li>
              <li>Excellent problem-solving abilities, especially under pressure.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;