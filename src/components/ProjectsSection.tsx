
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      image: '🛒',
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'Modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      techStack: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Socket.io'],
      image: '📋',
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with beautiful visualizations, location-based forecasts, and historical data analysis.',
      techStack: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3', 'PWA'],
      image: '🌤️',
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive social media analytics tool with data visualization, sentiment analysis, and automated reporting.',
      techStack: ['Python', 'Django', 'D3.js', 'PostgreSQL', 'Redis'],
      image: '📊',
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-purple-500 to-indigo-600'
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
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`
                relative h-96 rounded-2xl overflow-hidden transition-all duration-500
                ${hoveredProject === index ? 'transform scale-105 rotate-1' : 'transform scale-100 rotate-0'}
                cursor-pointer
              `}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                
                {/* Glass Effect */}
                <div className="absolute inset-0 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Project Icon */}
                  <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {project.image}
                  </div>
                  
                  {/* Project Info */}
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 flex-grow leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-slate-700/50 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demoLink}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none
                  bg-gradient-to-br ${project.gradient}
                  ${hoveredProject === index ? 'opacity-30' : 'opacity-0'}
                `}></div>
              </div>

              {/* Floating Elements */}
              <div className={`
                absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full transition-all duration-300
                ${hoveredProject === index ? 'scale-150 opacity-100' : 'scale-100 opacity-60'}
              `}></div>
              <div className={`
                absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full transition-all duration-300
                ${hoveredProject === index ? 'scale-150 opacity-100' : 'scale-100 opacity-60'}
              `}></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
            <span className="flex items-center gap-2">
              View All Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
