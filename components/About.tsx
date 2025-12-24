import React from 'react';
import { RESUME_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-paper relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-4 bg-ink transform -skew-y-1"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-ink shadow-hard p-8 md:p-12 rotate-1 hover:rotate-0 transition-transform duration-500">
            <h2 className="text-4xl font-serif font-bold text-ink mb-8">About Me</h2>
            <p className="text-xl md:text-2xl text-ink/90 leading-relaxed font-sans">
            "{RESUME_DATA.objective}"
            </p>
            <div className="mt-8 flex gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-orange border border-ink"></span>
                <span className="w-3 h-3 rounded-full bg-accent-green border border-ink"></span>
                <span className="w-3 h-3 rounded-full bg-accent-purple border border-ink"></span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;