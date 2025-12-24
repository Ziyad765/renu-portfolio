import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-ink text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-accent-orange rounded-2xl p-10 md:p-16 border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">Let's work together</h2>
                <p className="text-ink/80 text-lg font-medium max-w-md">
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
            </div>
            
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="px-8 py-4 bg-white text-ink font-bold text-lg rounded-xl border-2 border-ink shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Say Hello
            </a>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex flex-col gap-2 text-center md:text-left">
                <span className="font-serif text-2xl font-bold">Renu Venugopal</span>
                <div className="flex items-center gap-2 text-white/60">
                    <Phone className="w-4 h-4" />
                    <span>{RESUME_DATA.contact.phone}</span>
                </div>
             </div>

             <div className="flex gap-6">
                 <a href={RESUME_DATA.contact.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Github className="w-6 h-6" />
                 </a>
                 <a href={RESUME_DATA.contact.linkedin} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                 </a>
             </div>
        </div>
      
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm font-sans flex items-center justify-center gap-2">
            <p>© {new Date().getFullYear()} Made with</p>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <p>and Creativity</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;