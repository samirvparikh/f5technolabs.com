
import React from 'react';
import { 
  Code, Layout, Smartphone, Cloud, 
  Database, Shield, Users, Layers,
  Terminal, BarChart, Settings
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Custom Web Development",
      desc: "Robust, scalable, and secure web applications built using React, Next.js, and modern backends.",
      icon: <Code className="text-blue-600" />,
      features: ["Progressive Web Apps", "Single Page Apps", "Enterprise Portals"]
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile solutions for iOS and Android that deliver exceptional UX.",
      icon: <Smartphone className="text-purple-600" />,
      features: ["Flutter & React Native", "iOS (Swift)", "Android (Kotlin)"]
    },
    {
      title: "Cloud Infrastructure",
      desc: "Architecting serverless and containerized environments on AWS, Azure, and Google Cloud.",
      icon: <Cloud className="text-sky-500" />,
      features: ["DevOps & CI/CD", "Docker & Kubernetes", "Cloud Migration"]
    },
    {
      title: "AI & Machine Learning",
      desc: "Harnessing the power of generative AI and predictive models to automate complex workflows.",
      icon: <Layers className="text-indigo-600" />,
      features: ["LLM Integration", "Predictive Analytics", "Computer Vision"]
    },
    {
      title: "UI/UX Design",
      desc: "User-centric designs that prioritize accessibility, engagement, and conversion.",
      icon: <Layout className="text-pink-600" />,
      features: ["Wireframing", "High-Fidelity Mockups", "User Testing"]
    },
    {
      title: "Cybersecurity",
      desc: "Comprehensive security audits and hardening to protect your digital assets and reputation.",
      icon: <Shield className="text-green-600" />,
      features: ["Penetration Testing", "Security Compliance", "Threat Modeling"]
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">Our Tech Expertise</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">We provide end-to-end engineering services designed to propel your business into the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map(feat => (
                  <li key={feat} className="flex items-center text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Horizontal Scroll or Grid */}
      <section className="mt-32 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <h4 className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest mb-12">Technologies we work with</h4>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'PostgreSQL', 'Redis', 'TensorFlow', 'Figma', 'GraphQL'].map(tech => (
                <div key={tech} className="flex items-center justify-center p-4 bg-slate-50 rounded-xl font-bold text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  {tech}
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
