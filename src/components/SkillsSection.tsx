
import React, { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'CSS/SCSS', level: 88, color: 'from-pink-400 to-pink-600' },
    { name: 'MongoDB', level: 70, color: 'from-emerald-400 to-emerald-600' },
  ];

  const codingProfiles = [
    { name: 'LeetCode', solved: '200+', color: 'from-orange-400 to-red-500', bgColor: 'bg-orange-500/10' },
    { name: 'GitHub', repos: '50+', color: 'from-gray-400 to-gray-600', bgColor: 'bg-gray-500/10' },
    { name: 'CodeChef', rating: '1800+', color: 'from-yellow-400 to-orange-500', bgColor: 'bg-yellow-500/10' },
    { name: 'GeeksforGeeks', score: '500+', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500/10' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 font-medium">{skill.name}</span>
                <span className="text-blue-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                    isVisible ? 'translate-x-0' : '-translate-x-full'
                  }`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8 text-slate-200">Coding Profiles</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {codingProfiles.map((profile, index) => (
            <div
              key={profile.name}
              className={`relative group p-6 rounded-xl ${profile.bgColor} border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <div className="text-center">
                <h4 className={`text-lg font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-2`}>
                  {profile.name}
                </h4>
                <p className="text-slate-300 text-sm">
                  {profile.solved || profile.repos || profile.rating || profile.score}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
