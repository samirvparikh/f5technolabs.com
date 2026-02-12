
import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Star, Coffee, Monitor } from 'lucide-react';

const Career: React.FC = () => {
  const jobs = [
    { id: '1', title: "Senior React Developer", dept: "Frontend Engineering", location: "Remote / Bengaluru", type: "Full-time" },
    { id: '2', title: "Cloud Solutions Architect", dept: "DevOps & SRE", location: "Remote / Hyderabad", type: "Full-time" },
    { id: '3', title: "AI Research Engineer", dept: "Machine Learning", location: "Remote", type: "Contract" },
    { id: '4', title: "Product Designer (UI/UX)", dept: "Design", location: "Bengaluru", type: "Full-time" },
  ];

  return (
    <div className="py-20">
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Build the <span className="text-blue-400">Future</span> with Us.</h1>
            <p className="text-slate-400 text-lg mb-10">We're looking for visionary engineers, designers, and thinkers to join our mission of transforming industries through code.</p>
            <a href="#openings" className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-xl font-bold text-white hover:bg-blue-700 transition-all">
              View Open Roles <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Monitor size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Modern Tech Stack</h3>
          <p className="text-slate-600">Work with the latest technologies and tools in an environment that values innovation.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Coffee size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Great Culture</h3>
          <p className="text-slate-600">Collaborative, inclusive, and fun work environment where your voice is heard.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Rapid Growth</h3>
          <p className="text-slate-600">Clear career progression paths and generous learning & development budget.</p>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="max-w-5xl mx-auto px-4 py-20 bg-slate-50 rounded-3xl border border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Current Openings</h2>
          <p className="text-slate-500 mt-2">Find your next big challenge</p>
        </div>
        <div className="space-y-4">
          {jobs.map(job => (
            <div key={job.id} className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between hover:border-blue-200 transition-all hover:shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                  <span className="flex items-center"><Briefcase size={14} className="mr-1.5" /> {job.dept}</span>
                  <span className="flex items-center"><MapPin size={14} className="mr-1.5" /> {job.location}</span>
                  <span className="flex items-center"><Clock size={14} className="mr-1.5" /> {job.type}</span>
                </div>
              </div>
              <button className="mt-6 md:mt-0 px-6 py-2.5 bg-slate-900 text-white font-bold rounded-lg text-sm hover:bg-blue-600 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Career;
