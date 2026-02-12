
import React, { useState } from 'react';
import { 
  ArrowRight, Shield, Zap, Globe, 
  Sparkles, CheckCircle2, Terminal,
  Cpu, Rocket
} from 'lucide-react';
import { analyzeProjectIdea } from '../services/geminiService';
import { ProjectAnalysis } from '../types';

const Home: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<ProjectAnalysis | null>(null);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setIsAnalyzing(true);
    const result = await analyzeProjectIdea(idea);
    setAnalysis(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-blue-100 animate-bounce">
            <Sparkles size={16} />
            <span>AI-Driven Development for the Future</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            We Build Software That <br />
            <span className="gradient-text">Scales Your Vision.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            F5Technolabs is your strategic partner for custom software, cloud engineering, and digital transformation. 
            From startups to enterprises, we bring code to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#analyze" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Floating Shapes Decor */}
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders across the globe</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {['Microsoft', 'Google', 'Amazon', 'Meta', 'Netflix'].map(brand => (
               <span key={brand} className="text-2xl font-black text-slate-800">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* AI Estimator Section */}
      <section id="analyze" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-100 border border-blue-50">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                <Terminal className="text-blue-600" /> AI Project Blueprint
              </h2>
              <p className="text-slate-600">Tell us what you're building, and our Gemini-powered engine will draft a technical roadmap for you instantly.</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <textarea 
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g., A multi-vendor e-commerce platform with real-time analytics and AI recommendations..."
                  className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing || !idea.trim()}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2 transition-all"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing with AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    <span>Generate Blueprint</span>
                  </>
                )}
              </button>
            </div>

            {analysis && (
              <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl animate-in zoom-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4">Target Roadmap</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-blue-100 pb-2">
                        <span className="text-slate-600 text-sm">Est. Budget</span>
                        <span className="font-bold text-slate-900">{analysis.estimate}</span>
                      </div>
                      <div className="flex justify-between border-b border-blue-100 pb-2">
                        <span className="text-slate-600 text-sm">Timeline</span>
                        <span className="font-bold text-slate-900">{analysis.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white text-blue-600 text-xs font-bold rounded-full border border-blue-200">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                   <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4">Key Features</h4>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     {analysis.keyFeatures.map(feat => (
                       <li key={feat} className="flex items-start space-x-2 text-sm text-slate-700">
                         <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                         <span>{feat}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Built for Excellence</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We combine engineering rigor with design thinking to deliver products that users love and businesses rely on.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="text-yellow-500" />, title: "High Performance", desc: "Optimized for speed and efficiency at every layer of the tech stack." },
            { icon: <Shield className="text-green-500" />, title: "Enterprise Security", desc: "Built-in security protocols ensuring your data and IP are protected." },
            { icon: <Globe className="text-blue-500" />, title: "Global Scaling", desc: "Architectures designed to handle millions of users seamlessly." }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
