import React, { useState } from 'react';
import { 
  Building, 
  BookOpen, 
  Microscope, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ABOUT_TEXTS } from '../data/workshopData';

export default function AboutSection({ onOpenRegister }) {
  const [activeTab, setActiveTab] = useState('workshop');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Institutional Background & Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Advancing Materials Science & Metallurgical Engineering
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Organized by the Department of Metallurgical and Materials Engineering at National Institute of Technology Jamshedpur.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveTab('workshop')}
            className={`flex-1 min-w-[150px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'workshop'
                ? 'bg-blue-900 text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>About Workshop</span>
          </button>

          <button
            onClick={() => setActiveTab('institute')}
            className={`flex-1 min-w-[150px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'institute'
                ? 'bg-blue-900 text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>About NIT Jamshedpur</span>
          </button>

          <button
            onClick={() => setActiveTab('department')}
            className={`flex-1 min-w-[150px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'department'
                ? 'bg-blue-900 text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Microscope className="w-4 h-4" />
            <span>About Dept. of MME</span>
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'workshop' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Objective of the Workshop
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Metallurgy: Emerging Trends in Advanced Materials, Microstructural Assessment and Performance (METAMAP 2026)
              </h3>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-justify">
                {ABOUT_TEXTS.workshop.objective}
              </p>

              <div className="pt-2 space-y-2.5">
                {ABOUT_TEXTS.workshop.highlightPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenRegister}
                  className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  <span>Enroll in METAMAP 2026</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#schedule"
                  className="text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 hover:underline"
                >
                  Explore Day-wise Plan →
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/assets/campus_building.jpg"
                  alt="NIT Jamshedpur Campus"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <p className="font-bold text-sm sm:text-base">Diamond Jubilee Complex & Department of MME</p>
                    <p className="text-xs text-slate-300">NIT Jamshedpur • Jharkhand 831014</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-5 shadow-lg space-y-3">
                <h4 className="font-bold text-amber-400 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" /> Key Takeaways for Participants
                </h4>
                <ul className="text-xs sm:text-sm text-slate-200 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Exposure to next-generation metallic alloy systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Hands-on microstructural assessment & characterization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Structure-property relationship for durable manufacturing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Computational tools for predictive metallurgical modeling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'institute' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                <Building className="w-3.5 h-3.5 text-blue-700" /> Premier Institute of National Importance
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                National Institute of Technology Jamshedpur
              </h3>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-justify">
                {ABOUT_TEXTS.institute.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                {ABOUT_TEXTS.institute.stats.map((stat, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-xs text-center">
                    <p className="text-xl sm:text-2xl font-black text-blue-900">{stat.value}</p>
                    <p className="text-xs text-slate-600 font-semibold mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/assets/campus_building.jpg"
                  alt="NIT Jamshedpur Campus Aerial"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> 340-Acre Campus
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-2xl text-xs sm:text-sm text-amber-950 font-medium">
                NIT Jamshedpur stands as an epitome of engineering excellence with close academic-industrial synergy with Tata Steel, CSIR-NML, and leading automotive & power leaders.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'department' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                <Microscope className="w-3.5 h-3.5 text-emerald-700" /> Department of Metallurgical and Materials Engineering
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Department of MME (DMME)
              </h3>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3 text-justify">
                {ABOUT_TEXTS.department.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                {ABOUT_TEXTS.department.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 p-2 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">State-of-the-Art Facilities</h4>
                    <p className="text-xs text-slate-400">Advanced Research & Teaching Labs</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700">
                    <p className="font-bold text-amber-400">HR-SEM & EDS</p>
                    <p className="text-[11px] text-slate-300">Micro-analysis & Imaging</p>
                  </div>
                  <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700">
                    <p className="font-bold text-amber-400">X-Ray Diffraction</p>
                    <p className="text-[11px] text-slate-300">Crystallographic Phase Id</p>
                  </div>
                  <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700">
                    <p className="font-bold text-amber-400">Mechanical Testing</p>
                    <p className="text-[11px] text-slate-300">Fatigue, Creep & Impact</p>
                  </div>
                  <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700">
                    <p className="font-bold text-amber-400">NDT & Simulation</p>
                    <p className="text-[11px] text-slate-300">Defect Detection & FEM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Collaboration</p>
                  <p className="font-bold text-slate-800 text-sm">The Indian Institute of Metals (IIM)</p>
                  <p className="text-xs text-blue-600 font-medium">Jamshedpur Chapter</p>
                </div>
                <img src="/assets/iim_logo.png" alt="IIM Logo" className="w-14 h-14 object-contain" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
