import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Microscope, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Search, 
  FileCheck2,
  Binary
} from 'lucide-react';
import { BROAD_AREAS } from '../data/workshopData';

const ICONS = [
  Layers,
  Microscope,
  Activity,
  ShieldCheck,
  Search,
  FileCheck2,
  ShieldCheck,
  Binary
];

export default function ObjectivesAreas() {
  return (
    <section id="objectives" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Core Thematic Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Broad Areas & Technical Scope
          </h2>
          <p className="text-slate-300 text-base mt-2">
            Explore the multi-disciplinary themes covered throughout the 5-day national workshop, bridging fundamental material science with state-of-the-art engineering applications.
          </p>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 8 Broad Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BROAD_AREAS.map((area, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div
                key={area.id}
                className="group bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-950/80 group-hover:bg-amber-500/20 text-blue-400 group-hover:text-amber-400 border border-blue-800/60 group-hover:border-amber-400/30 rounded-xl transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-amber-400/80">
                      0{area.id}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {area.topics}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Interactive Lecture & Discussion</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
