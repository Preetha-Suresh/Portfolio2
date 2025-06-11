
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      techStack: ['React', 'Socket.io', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Interactive weather dashboard with data visualization, forecasting, and location-based weather alerts using external APIs.',
      techStack: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-orange-500 to-pink-500'
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
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`
                relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 transition-all duration-500
                ${hoveredProject === index ? 'transform scale-105 border-blue-500/50' : 'transform scale-100'}
                cursor-pointer
              `}>
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
                  
                  {/* Action Button */}
                  <button className="w-full py-3 px-4 bg-slate-700/50 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-600 hover:border-blue-500 font-medium">
                    View Project
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none
                  bg-gradient-to-br ${project.gradient}
                  ${hoveredProject === index ? 'opacity-20' : 'opacity-0'}
                `}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
