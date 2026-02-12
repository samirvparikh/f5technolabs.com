
import React from 'react';
import { Target, Heart, Eye, Users, Award, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Pioneering the <span className="text-blue-600">Next Wave</span> of Digital Innovation.</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2018, F5Technolabs has grown from a small group of passionate coders into a global engineering powerhouse. We believe that technology should be an enabler, not a barrier.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              <div>
                <span className="block text-3xl font-bold text-blue-600">150+</span>
                <span className="text-sm text-slate-500 font-medium">Projects Delivered</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-blue-600">40+</span>
                <span className="text-sm text-slate-500 font-medium">Expert Developers</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://picsum.photos/800/600?tech=1" alt="Our Team" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
            <Target className="text-blue-400 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">To democratize high-end software engineering for ambitious companies worldwide, turning complex ideas into intuitive digital realities.</p>
          </div>
          <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
            <Eye className="text-purple-400 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">To become the world's most trusted partner for end-to-end digital transformation, setting benchmarks in quality and transparency.</p>
          </div>
          <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
            <Heart className="text-pink-400 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-slate-400 leading-relaxed">Radical transparency, relentless innovation, and a commitment to people. We don't just build code; we build relationships.</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12"></div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">The Minds Behind F5Technolabs</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "John Doe", role: "CEO & Founder", img: "https://picsum.photos/400/400?face=1" },
            { name: "Sarah Smith", role: "CTO", img: "https://picsum.photos/400/400?face=2" },
            { name: "Michael Chen", role: "Head of AI", img: "https://picsum.photos/400/400?face=3" },
            { name: "Lisa Wong", role: "Lead UI/UX", img: "https://picsum.photos/400/400?face=4" }
          ].map(member => (
            <div key={member.name} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src={member.img} alt={member.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="text-white">
                     <p className="text-xs font-semibold opacity-80 uppercase tracking-widest">{member.role}</p>
                     <p className="text-lg font-bold">{member.name}</p>
                   </div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 text-center">{member.name}</h4>
              <p className="text-sm text-slate-500 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
