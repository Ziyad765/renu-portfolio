import React from 'react';
import { RESUME_DATA } from '../constants';
import { ExternalLink, Layers, Lock, Brain, Glasses, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
        case 'Web': return <Layers className="w-6 h-6" />;
        case 'Security': return <Lock className="w-6 h-6" />;
        case 'AI/ML': return <Brain className="w-6 h-6" />;
        case 'VR': return <Glasses className="w-6 h-6" />;
        default: return <Layers className="w-6 h-6" />;
    }
  };

  const getCardColor = (category: string) => {
    switch(category) {
        case 'Web': return 'bg-[#FEF08A]'; // Yellow
        case 'Security': return 'bg-[#BBF7D0]'; // Green
        case 'AI/ML': return 'bg-[#FECACA]'; // Red/Pink
        case 'VR': return 'bg-[#E9D5FF]'; // Purple
        default: return 'bg-white';
    }
  };

  return (
    <section id="projects" className="py-24 bg-white border-y-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-serif font-bold text-ink mb-16 text-center">
          Featured Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {RESUME_DATA.projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col h-full border-2 border-ink shadow-hard rounded-xl overflow-hidden transition-all duration-300 hover:shadow-hard-lg hover:-translate-y-1 ${getCardColor(project.category)}`}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-white border-2 border-ink rounded-lg">
                            {getIcon(project.category)}
                        </div>
                        <span className="font-mono text-xs uppercase tracking-wider border border-ink px-2 py-1 rounded-full bg-white">
                            {project.category}
                        </span>
                    </div>
                </div>

                <h3 className="text-3xl font-serif font-bold text-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-ink/70 font-medium mb-6">{project.subtitle}</p>

                <div className="flex-grow">
                    <ul className="space-y-3 mb-8">
                    {project.description.map((desc, i) => (
                        <li key={i} className="text-ink/80 text-sm leading-relaxed flex items-start gap-3">
                            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            {desc}
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="pt-6 border-t-2 border-ink/10 mt-auto">
                    <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span 
                            key={tech} 
                            className="text-xs font-bold px-3 py-1 bg-white border border-ink rounded-md text-ink"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;