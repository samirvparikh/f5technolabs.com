
import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: "FinFlow Analytics", category: "Web Dev", image: "https://picsum.photos/600/400?v=1", desc: "A real-time financial data visualization dashboard for investment banks." },
    { id: 2, title: "HealthSync Mobile", category: "App Dev", image: "https://picsum.photos/600/400?v=2", desc: "Patient monitoring app with real-time sync to hospital databases." },
    { id: 3, title: "Nexus ERP", category: "Cloud", image: "https://picsum.photos/600/400?v=3", desc: "Cloud-native resource planning for global manufacturing chains." },
    { id: 4, title: "Pulse AI Chat", category: "AI/ML", image: "https://picsum.photos/600/400?v=4", desc: "Customer support automation using advanced NLP and LLMs." },
    { id: 5, title: "Zenith Design System", category: "UI/UX", image: "https://picsum.photos/600/400?v=5", desc: "Unified design language for a Fortune 500 SaaS company." },
    { id: 6, title: "SecureBank Core", category: "Web Dev", image: "https://picsum.photos/600/400?v=6", desc: "Blockchain-based core banking engine with triple-layer security." },
  ];

  const categories = ['All', 'Web Dev', 'App Dev', 'Cloud', 'AI/ML', 'UI/UX'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-slate-600">Explore our recent projects and technical achievements.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                   <button className="p-3 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform shadow-xl"><ExternalLink size={20} /></button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                <button className="flex items-center text-sm font-bold text-blue-600 hover:translate-x-2 transition-transform">
                  Case Study <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
