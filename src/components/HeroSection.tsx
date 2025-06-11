
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Alex";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const techStack = ['Java', 'Python', 'C++', 'C', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js', 'Git'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-white">{displayText.split("I'm")[0]}</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {displayText.includes("I'm") ? "I'm Alex" : ""}
                </span>
                <span className="animate-pulse text-blue-400">|</span>
              </h1>
              <p className="text-xl text-blue-400 mb-6">Computer Science Student</p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                Passionate about learning new technologies and solving complex problems. 
                Currently pursuing Computer Science and eager to contribute to innovative projects.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-blue-400 text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm hover:border-blue-500/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Column - Profile Card & Stats */}
          <div className="flex flex-col items-center space-y-8">
            {/* Profile Card */}
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                A
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800 rounded-2xl p-4 border border-slate-700 text-center min-w-[250px]">
                <h3 className="text-white font-bold text-lg">Computer Science Student</h3>
                <p className="text-slate-400 text-sm">Fresher • Ready to Learn</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">10+</div>
                <div className="text-slate-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">11+</div>
                <div className="text-slate-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
