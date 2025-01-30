import React from 'react';
import { GraduationCap, Heart, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../src/App.jsx';

const AboutPage = () => {
  const isVisible = useIntersectionObserver();
  const fadeInClass = "opacity-100 translate-y-0 transition-all duration-1000";
  const fadeOutClass = "opacity-0 translate-y-8 transition-all duration-1000";

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Bio Section */}
        <section id="bio" className={`${isVisible.bio ? fadeInClass : fadeOutClass} mb-16`}>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-6">
              Hi! I'm Evan. Born and raised in Vancouver, WA, I've always been fascinated by computers. My journey into programming began in 8th grade when I decided to teach myself how to code. This early interest solidified my decision to pursue Computer Science as my major—a path I've stayed committed to throughout high school.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At 16, I began working as a Lifeguard, which sparked my interest in health and safety training. This experience led me to found Taylored Instruction LLC, an American Red Cross Licensed Training Provider and American Heart Association Training Site. We're dedicated to delivering high-quality health and safety training, including CPR courses and Lifeguard certification, to our community.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className={`${isVisible.timeline ? fadeInClass : fadeOutClass} space-y-8`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">My Journey</h2>
          
          {/* 2024 - Hockinson */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Hockinson High School</h3>
                  <span className="text-blue-600 font-medium">2024</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Graduated from Hockinson High School in Hockinson, WA. As captain of the boys varsity swim team and a member of the varsity golf team, I developed strong leadership and teamwork skills. I was also actively involved in our Future Business Leaders of America chapter.
                </p>
              </div>
            </div>
          </div>

          {/* 2024 - Clark College */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Clark College</h3>
                  <span className="text-purple-600 font-medium">2024</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Completed my studies at Clark College in Vancouver, WA, with a focus on Computer Science. I built a strong foundation in programming languages including Python, C, HTML/CSS, and JavaScript. All credits successfully transferred to Cal Poly SLO.
                </p>
              </div>
            </div>
          </div>

          {/* 2028 - Cal Poly */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">California Polytechnic State University</h3>
                  <span className="text-green-600 font-medium">Expected 2028</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Currently pursuing my Bachelor's in Computer Science with a planned concentration in Privacy and Security. I'm also working towards a minor in Entrepreneurship, combining my technical interests with business acumen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;