import React from 'react';
import { RESUME_DATA } from '../constants';
import { Code2, Database, Shield, Cpu, PenTool, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  const icons = {
    "Languages": <Code2 className="w-5 h-5" />,
    "Web Dev": <Layout className="w-5 h-5" />,
    "AI/ML": <Cpu className="w-5 h-5" />,
    "Cybersecurity": <Shield className="w-5 h-5" />,
    "Tools": <PenTool className="w-5 h-5" />
  };

  const colors = [
    'bg-accent-blue',
    'bg-accent-green',
    'bg-accent-purple',
    'bg-accent-orange',
    'bg-white'
  ];

  return (
    <section id="skills" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <h2 className="text-5xl font-serif font-bold text-ink mb-4">Technical Arsenal</h2>
            <p className="text-lg text-ink/60 font-sans max-w-2xl mx-auto">
                Tools and technologies I use to bring ideas to life.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.skills.technical.map((cat, idx) => (
            <div 
                key={idx} 
                className={`p-6 border-2 border-ink shadow-hard rounded-lg ${colors[idx % colors.length]} hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-6 border-b-2 border-ink/10 pb-4">
                <div className="p-2 bg-white border border-ink rounded-md shadow-sm">
                    {/* @ts-ignore */}
                    {icons[cat.name as keyof typeof icons] || <Database className="w-5 h-5"/>}
                </div>
                <h3 className="text-xl font-bold font-serif text-ink">{cat.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-white border border-ink rounded-full text-sm font-medium text-ink shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;