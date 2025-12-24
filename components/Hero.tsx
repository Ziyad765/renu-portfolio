import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-accent-purple rounded-full mix-blend-multiply opacity-50 blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-[10%] w-40 h-40 bg-accent-green rounded-full mix-blend-multiply opacity-50 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <div className="mb-6 inline-block rotate-[-2deg] hover:rotate-2 transition-transform duration-300">
           <span className="bg-ink text-white px-4 py-1 font-mono text-sm shadow-hard-sm">
             Available for opportunities
           </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight text-ink mb-6 leading-[1.1]">
          Hello, I'm <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10">{RESUME_DATA.name.split(' ')[0]}</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-accent-orange/60 -z-0 skew-x-[-12deg]"></span>
          </span>
          {' '}{RESUME_DATA.name.split(' ')[1]}
        </h1>
        
        <h2 className="text-xl md:text-3xl text-ink/80 font-medium mb-10 max-w-2xl font-sans">
          A <span className="font-serif italic text-accent-purple">Computer Science</span> & <span className="font-serif italic text-accent-green">Design</span> Undergraduate crafting digital experiences.
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={RESUME_DATA.contact.github} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-ink shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold group"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          
          <a 
            href={RESUME_DATA.contact.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-accent-blue border-2 border-ink shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a 
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="flex items-center gap-2 px-8 py-3 bg-accent-orange border-2 border-ink shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold"
          >
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
         <ArrowDown className="w-8 h-8 text-ink" />
      </div>
    </div>
  );
};

export default Hero;