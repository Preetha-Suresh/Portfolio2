import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Code Editor',
      description: 'A dynamic and responsive code editor. It allows users to edit, preview, and execute code snippets in multiple programming languages, including JavaScript, Python, HTML, CSS, C, C++, Java, PHP, and others.',
      techStack: ['React', 'Bootstrap', 'Monaco Editor', 'Piston API'],
      image: '/public/code bg.jpg',
      demoLink: '#',
      githubLink: 'https://github.com/Preetha-Suresh/CodeEditor',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Instagram CLone',
      description: "A fully functional Instagram clone developed with features including follow/unfollow functionality and story viewing, mimicking key features of Instagram's user interface and uses custome-made JSON database.",
      techStack: ['React', 'Router and Hooks', 'Boostrap'],
      image: '/public/insta.webp',
      demoLink: '#',
      githubLink: 'https://github.com/Preetha-Suresh/InstaClone',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Weather view App',
      description: 'Interactive weather dashboard  is a real-time weather forecasting application built using React.js and styled with Bootstrap. It allows users to search for weather details of any city across the world.',
      techStack: ['React', 'Weather API', 'Bootstrap'],
      image: '/public/weathe.webp',
      demoLink: '#',
      githubLink: 'https://github.com/Preetha-Suresh/Weather-view-App',
      gradient: 'from-blue-500 to-purple-600'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Entire Card Click opens Demo */}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 transition-all duration-500
                  ${hoveredProject === index ? 'transform scale-105 border-blue-500/50' : 'transform scale-100'}
                  cursor-pointer`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-slate-700/50 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Button */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="block w-full text-center py-3 px-4 bg-slate-700/50 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-600 hover:border-blue-500 font-medium"
                    >
                      View on GitHub
                    </a>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none
                    bg-gradient-to-br ${project.gradient}
                    ${hoveredProject === index ? 'opacity-20' : 'opacity-0'}`}
                  ></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
