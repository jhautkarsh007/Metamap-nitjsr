import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Microscope, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Binary,
  CheckCircle2,
  Boxes
} from 'lucide-react';
import { COURSE_MODULES, WORKSHOP_DETAILS } from '../data/workshopData';

const MODULE_ICONS = [
  Boxes,        // 01 Design
  Layers,       // 02 Process
  Microscope,   // 03 Decode
  ShieldCheck,  // 04 Deliver
  Binary        // 05 Predict
];

export default function ObjectivesAreas() {
  return (
    <section id="modules" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 mb-2">
            <span>{WORKSHOP_DETAILS.tagline}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1 tracking-tight font-serif uppercase">
            COURSE OUTLINE
          </h2>

          <p className="text-base sm:text-lg text-amber-300/90 font-serif italic mt-2">
            {WORKSHOP_DETAILS.subTagline}
          </p>

          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
            A comprehensive 5-stage pedagogical blueprint bridging atomic-level alloy design to industrial failure prevention and green sustainability.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 5 Course Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {COURSE_MODULES.map((module, idx) => {
            const IconComponent = MODULE_ICONS[idx % MODULE_ICONS.length];
            const isWide = idx === 3 || idx === 4;

            return (
              <div
                key={module.id}
                className={`group bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/60 rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1 ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Module Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-950 text-blue-400 group-hover:bg-amber-500/20 group-hover:text-amber-400 border border-blue-800/60 group-hover:border-amber-400/30 rounded-2xl transition-all shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold tracking-wider text-amber-400 block uppercase">
                          {module.moduleNumber}
                        </span>
                        <span className="text-2xl font-black text-white font-serif tracking-tight">
                          {module.id}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs bg-slate-700/60 text-slate-300 font-mono px-2.5 py-1 rounded-full border border-slate-600/50">
                      Phase {idx + 1}
                    </span>
                  </div>

                  {/* Module Title */}
                  <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors uppercase font-serif tracking-tight leading-snug mb-4">
                    {module.title}
                  </h3>

                  {/* Topic Bullet Points */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span className="group-hover:text-slate-100 transition-colors">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" /> Lecture & Practical Case
                  </span>
                  <span className="font-mono text-slate-500">Day 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-800 to-blue-950 border border-blue-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              Ready to map microstructure to performance?
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              5 comprehensive modules delivered by premier experts from NIT Jamshedpur, CSIR-NML, and Tata Steel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
