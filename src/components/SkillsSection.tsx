import React, { useState, useEffect, useRef } from 'react';
import { Github, Code, Trophy, BookOpen } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const codingProfiles = [
    {
      name: 'GitHub',
      description: 'Open source contributions & projects',
      stat: '15+ Repositories',
      icon: Github,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/10',
      buttonText: 'Visit Profile',
      link: 'https://github.com/Preetha-Suresh',
    },
    {
      name: 'LeetCode',
      description: 'Algorithmic problem solving',
      stat: '5+ Problems Solved',
      icon: Code,
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-500/10',
      buttonText: 'Visit Profile',
      link: 'https://leetcode.com/u/Preetha_206/',
    },
    {
      name: 'GeeksforGeeks',
      description: 'Technical articles & solutions',
      stat: '100+ problems solve',
      icon: BookOpen,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500/10',
      buttonText: 'Visit Profile',
      link: 'https://www.geeksforgeeks.org/user/preethq1zx/',
    },
    {
      name: 'CodeChef',
      description: 'Competitive programming',
      stat: '★ Rating',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      buttonText: 'Visit Profile',
      link: 'https://www.codechef.com/users/preetha_206',
    },
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
              Coding Profiles
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore my journey across different coding platforms and see my problem-solving skills in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {codingProfiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <div
                key={profile.name}
                className={`relative group p-8 rounded-2xl ${profile.bgColor} border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer animate-fade-in-up text-center`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${profile.color} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h4 className={`text-xl font-bold mb-2 bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                  {profile.name}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {profile.description}
                </p>

                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${profile.color} text-white text-sm font-semibold mb-6`}>
                  {profile.stat}
                </div>

                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full py-3 px-4 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-600 hover:border-slate-500">
                    {profile.buttonText}
                  </button>
                </a>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
