import React from 'react';
import { 
  Presentation, 
  FlaskConical, 
  Cpu, 
  Factory, 
  Users, 
  ShieldCheck, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { KEY_FEATURES, WORKSHOP_DETAILS } from '../data/workshopData';

const ICON_MAP = {
  Presentation: Presentation,
  FlaskConical: FlaskConical,
  Cpu: Cpu,
  Factory: Factory,
  Users: Users,
  ShieldCheck: ShieldCheck
};

export default function KeyFeatures() {
  return (
    <section id="features" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Workshop Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-serif">
            KEY FEATURES
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Key pillars of the 5-day curriculum designed for industry engineers, academicians, and students.
          </p>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KEY_FEATURES.map((feature, idx) => {
            const Icon = ICON_MAP[feature.icon] || Sparkles;
            return (
              <div
                key={feature.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-amber-400 transition-all shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-500 font-bold text-lg">⮚</span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mt-2 text-justify">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    <CheckCircle className="w-3.5 h-3.5" /> Included in Program
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Feature #{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature CTA Strip */}
        <div className="mt-14 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-serif">
              Ready to elevate your metallurgical and characterization expertise?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Registration is open for students of all departments, academicians, and industry professionals.
            </p>
          </div>
          <a
            href="#registration"
            className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-amber-500/30 transition-all text-center"
          >
            View Fee Details
          </a>
        </div>
      </div>
    </section>
  );
}
