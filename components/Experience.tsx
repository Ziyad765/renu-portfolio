import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, GraduationCap, Calendar, Star } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-paper relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1C1917 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-serif font-bold text-ink mb-20 text-center">Journey So Far</h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Experience Column */}
            <div>
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-accent-orange border-2 border-ink rounded-lg shadow-hard-sm">
                        <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-ink">Internships</h3>
                </div>
                
                <div className="relative border-l-4 border-ink ml-5 space-y-12 pb-4">
                    {RESUME_DATA.internships.map((job, idx) => (
                        <div key={idx} className="relative pl-10">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[11px] top-1 h-5 w-5 bg-white border-4 border-ink rounded-full"></div>
                            
                            <div className="bg-white p-6 border-2 border-ink shadow-hard-sm rounded-lg hover:shadow-hard transition-shadow">
                                <h4 className="text-xl font-bold text-ink">{job.role}</h4>
                                <p className="text-accent-orange font-bold text-sm mb-2">{job.company}</p>
                                <div className="inline-flex items-center gap-1.5 text-xs font-mono bg-paper border border-ink px-2 py-1 rounded">
                                    <Calendar className="w-3 h-3" />
                                    {job.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education & Volunteer Column */}
            <div>
                 <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-accent-blue border-2 border-ink rounded-lg shadow-hard-sm">
                        <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-ink">Education</h3>
                </div>

                <div className="space-y-6 mb-16">
                    {RESUME_DATA.education.map((edu, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg border-2 border-ink shadow-hard-sm">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-bold text-ink max-w-[70%]">{edu.degree}</h4>
                                <span className="text-sm font-bold text-white bg-ink px-2 py-1 rounded">{edu.yearOrScore}</span>
                            </div>
                            <p className="text-ink/60 font-medium">{edu.institution}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-accent-purple/20 p-8 rounded-2xl border-2 border-ink relative">
                    <div className="absolute -top-6 -right-4 bg-accent-purple border-2 border-ink p-3 rounded-full shadow-hard-sm animate-bounce">
                        <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-ink mb-4">Volunteering</h3>
                    <ul className="space-y-3">
                        {RESUME_DATA.volunteer.map((vol, idx) => (
                            <li key={idx} className="text-ink text-sm flex gap-3 items-start">
                                <span className="text-xl leading-none text-accent-purple">●</span>
                                {vol}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;