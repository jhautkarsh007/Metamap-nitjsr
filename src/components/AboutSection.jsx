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
  Sparkles,
  Users,
  Compass,
  Target,
  Zap,
  Globe
} from 'lucide-react';
import { ABOUT_TEXTS, WHO_AND_WHY, WORKSHOP_DETAILS } from '../data/workshopData';

const OBJECTIVE_ICONS = [Target, Compass, Zap, Microscope, Globe];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('workshop');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Overview & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-serif">
            About METAMAP 2027 & Host Institution
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
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
            <span>Objective of Workshop</span>
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
            <span>About the Institute</span>
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
            <span>About the Department</span>
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'workshop' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Brochure Blueprint
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
                    OBJECTIVE OF THE WORKSHOP
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium italic mt-1">
                    {ABOUT_TEXTS.workshop.tagline}
                  </p>
                </div>

                {/* 5 Objectives from Photo 1 */}
                <div className="space-y-4">
                  {ABOUT_TEXTS.workshop.objectivesList.map((item, idx) => {
                    const IconComp = OBJECTIVE_ICONS[idx % OBJECTIVE_ICONS.length];
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5 hover:border-blue-300 transition-all"
                      >
                        <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex-shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                            <span>{item.title}</span>
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 text-justify">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar with Who Should Attend & Why Attend (Photo 2) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <img
                    src="/assets/campus_building.jpg"
                    alt="NIT Jamshedpur Campus"
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-5">
                    <div className="text-white">
                      <p className="font-bold text-sm sm:text-base">DJLHC & Dept. of Metallurgical and Materials Engg.</p>
                      <p className="text-xs text-slate-300">NIT Jamshedpur • Jharkhand 831014</p>
                    </div>
                  </div>
                </div>

                {/* Who Should Attend */}
                <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-3">
                  <h4 className="text-base font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-400" /> WHO SHOULD ATTEND
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                    {WHO_AND_WHY.whoShouldAttend.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 bg-white/10 p-2.5 rounded-lg border border-white/10">
                        <span className="text-amber-400 font-bold">⮚</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Attend */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-3">
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-700" /> WHY ATTEND
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {WHO_AND_WHY.whyAttend.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-blue-700 font-bold">⮚</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug font-serif">
                {ABOUT_TEXTS.institute.heading}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                {ABOUT_TEXTS.institute.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                {ABOUT_TEXTS.institute.stats.map((stat, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-xs text-center">
                    <p className="text-lg sm:text-xl font-black text-blue-900">{stat.value}</p>
                    <p className="text-xs text-slate-600 font-semibold mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/assets/campus_building.jpg"
                  alt="NIT Jamshedpur Campus"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> 340-Acre Campus
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-2xl text-xs sm:text-sm text-amber-950 font-medium">
                Established under India's Second Five-Year Plan (1956–1961), NIT Jamshedpur continues its legacy of delivering top-tier engineering graduates and leaders in technological innovation.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'department' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                <Microscope className="w-3.5 h-3.5 text-emerald-700" /> Foundational Department (Est. 1960)
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug font-serif">
                {ABOUT_TEXTS.department.heading}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                {ABOUT_TEXTS.department.description}
              </p>

              {/* Department Highlights */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Key Research & Specialization Domains
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ABOUT_TEXTS.department.specializations.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 p-2 rounded-lg text-xs font-medium text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 p-2 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Key Industrial Partners</h4>
                    <p className="text-xs text-slate-400">Deep Institutional Collaboration</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {ABOUT_TEXTS.department.industryTies.map((ind, i) => (
                    <div key={i} className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 text-center font-bold text-amber-300">
                      {ind}
                    </div>
                  ))}
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
